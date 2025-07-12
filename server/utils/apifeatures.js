class ApiFeatures {
  constructor(query, queryObject) {
    this.query = query;
    this.queryObject = queryObject;
  }

  filter() {
    const queryObject = { ...this.queryObject };

    const excludefields = ["page", "sort", "limit", "fields"];
    excludefields.forEach((el) => delete queryObject[el]);

    // Advance filtering .....................................................

    let mongoFilter = {};

    for (const key in queryObject) {
      if (key.includes("[") && key.includes("]")) {
        const [field, operator] = key.split(/\[|\]/).filter(Boolean);
        if (!mongoFilter[field]) mongoFilter[field] = {}; //set to empty obj.........
        mongoFilter[field][`$${operator}`] = isNaN(queryObject[key])
          ? queryObject[key]
          : Number(queryObject[key]);
      } else {
        const value = queryObject[key];
        mongoFilter[key] =
          !isNaN(value) && value.trim() !== "" ? Number(value) : value;
      }
    }
    this.query = this.query.find(mongoFilter);
    // let query = Product.find(mongoFilter); // change to let
    return this;
  }

  sort() {
    if (this.queryObject.sort) {
      const sortBy = this.queryObject.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryObject.fields) {
      const fields = this.queryObject.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  pagination() {
    const page = this.queryObject.page ? this.queryObject.page * 1 : 1;
    const limit = this.queryObject.limit ? this.queryObject.limit * 1 : 0; // 0 = no limit
    const skip = (page - 1) * limit;

    if (limit > 0) {
      this.query = this.query.skip(skip).limit(limit);
    }

    return this;
  }
}

module.exports = ApiFeatures;
