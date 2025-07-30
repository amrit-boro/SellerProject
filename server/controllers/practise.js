arr = { "name[gte]": "500" };

for (const key in arr) {
  if (key.includes("[") && key.includes("]")) {
    const [field, operator] = key.split(/\[|\]/).filter(Boolean);
  }
}

//dslkfj
// console.log(field);
