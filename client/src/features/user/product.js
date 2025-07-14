export const fetchProduct = async () => {
  const res = await fetch("http://localhost:3002/api/v1/product");
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
