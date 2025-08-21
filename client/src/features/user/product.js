// export const fetchProduct = async () => {
//   const res = await fetch("http://localhost:3002/api/v1/product");
//   if (!res.ok) throw new Error("Network response was not ok");
//   const data = await res.json();
//   return data;
// };

export const fetchProduct = async ({
  distance,
  filteritemName,
  lat,
  lng,
  unit,
} = {}) => {
  let url = "http://localhost:3002/api/v1/product";
  const latlng = `${lat},${lng}`;

  // If location filters are present, change the base URL
  if (distance && lat && lng && unit) {
    url = `http://localhost:3002/api/v1/product/product-within/${distance}/center/${latlng}/unit/${unit}`;

    // Append ?name= to it if a name is also provided
    if (filteritemName) {
      url += `?name=${encodeURIComponent(filteritemName)}`;
    }
  } else if (filteritemName) {
    // Only product name filter is provided
    url += `?name=${encodeURIComponent(filteritemName)}`;
  }

  const res = await fetch(url);
  // console.log("res: ", res);
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  // console.log("data: ", data);
  return data;
};

export const fetchAllfilteredProducts = async (
  distance,
  filteritemName,
  lat,
  lng,
  unit
) => {
  const latlng = `${lat},${lng}`;
  const res = await fetch(
    `http://localhost:3002/api/v1/product/product-within/${distance}/center/${latlng}/unit/${unit}?name=${filteritemName}`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data;
};

export const fetchSearchProducts = async (itemName, min, max) => {
  const queryParams = new URLSearchParams();

  if (itemName) queryParams.append("name", itemName);
  if (min) queryParams.append("price[gte]", min);
  if (max) queryParams.append("price[lt]", max);

  const res = await fetch(
    `http://localhost:3002/api/v1/product?${queryParams.toString()}`
  );
  const data = await res.json();
  if (!res.ok) {
    // ✅ Throw with backend message
    const error = new Error(data.message || "Something went wrong");
    error.status = res.status;
    error.response = data;
    throw error;
  }
  return data;
};

export const fetchAllsellerProducts = async (id) => {
  const res = await fetch(`http://localhost:3002/api/v1/getAllproducts/${id}`);
  if (!res.ok) throw new Error("something is wrong when fetching the data ):");
  const data = await res.json();
  return data;
};

export const fetchAllSellerProductsBySellerId = async (id) => {
  const res = await fetch(
    `http://localhost:3002/api/v1/product/getAllproductsBySellerId/${id}`
  );
  if (!res.ok) throw new Error("Something is wrong when fetching the data");
  const data = await res.json();
  return data;
};

export const fetchSeller = async (id) => {
  const res = await fetch(`http://localhost:3002/api/v1/seller/${id}`);
  if (!res.ok) throw new Error("something is wrong when fetching the data ):");
  const data = await res.json();
  return data;
};

//
export const fetchProductById = async (id) => {
  const res = await fetch(`http://localhost:3002/api/v1/product/${id}`);
  if (!res.ok)
    throw new Error("something went wrong with fetching the data ):");
  const data = await res.json();
  return data;
};

export const fetchLoggedInUser = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:3002/api/v1/user/:id`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const data = await res.json();
  return data.user; // adjust based on your backend response
};
