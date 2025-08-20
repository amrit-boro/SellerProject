import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProductsBySellerId } from "../user/useProduct";
import axios from "axios";

const SellerProducts = ({ sellerId }) => {
  const { data, isLoading } = useProductsBySellerId(sellerId);
  const queryClient = useQueryClient();
  const products = data?.data?.products || [];
  const sellerToken = localStorage.getItem("sellerToken");
  const { mutate, isError, error } = useMutation({
    mutationFn: (id) =>
      axios.delete(`http://localhost:3002/api/v1/product/${id}`, {
        headers: {
          Authorization: `Bearer ${sellerToken}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries["getAllsellerProductsById"];
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item ?")) {
      mutate(id);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={styles.gridWrapper}>
      <div
        style={{
          ...styles.grid,
          justifyContent: products.length === 1 ? "start" : "space-between",
        }}
      >
        {products.map((product) => (
          <div key={product._id} style={styles.productCard}>
            <img
              style={styles.imagePlaceholder}
              src={product.images?.[0]}
              alt={product.name}
            />

            <h4 style={{ margin: "2px" }}>{product.name}</h4>
            <p style={{ color: "green", fontWeight: "bold", margin: "4px" }}>
              ₹{product.price}
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button style={styles.viewBtn}>View</button>
              <button
                style={styles.delviewBtn}
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  gridWrapper: {
    paddingRight: "5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", // was 280px
    gap: "20px",
    padding: "10px",
    alignItems: "start",
  },

  productCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    maxWidth: "240px", // ✅ limit size
    width: "100%", // ✅ allow fill but stop from stretching too much
    // ❌ remove margin: "0 auto"
  },

  imagePlaceholder: {
    width: "100%",
    height: "200px", // increased a bit, adjust as needed
    objectFit: "contain", // 👈 important: fixes stretched look
    borderRadius: "6px",
    marginBottom: "12px",
    backgroundColor: "#f0f0f0", // optional lighter background
  },

  viewBtn: {
    background: "#46d12e",
    padding: "8px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
  },
  delviewBtn: {
    background: "#e63946",
    padding: "8px 25px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#e3e1e1",
  },
};

export default SellerProducts;
