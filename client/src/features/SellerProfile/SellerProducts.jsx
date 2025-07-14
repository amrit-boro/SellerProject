const products = [
  { _id: 1, name: "Badminton", price: 2000 },
  { _id: 2, name: "Samsung Galaxy a14 5g", price: 20000 },

  { _id: 8, name: "Bag", price: 800 },
  // Add more if needed
];

const SellerProducts = () => {
  return (
    <div style={styles.gridWrapper}>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product._id} style={styles.productCard}>
            <div style={styles.imagePlaceholder}></div>
            <h4>{product.name}</h4>
            <p style={{ color: "green", fontWeight: "bold" }}>
              ₹{product.price}
            </p>
            <button style={styles.viewBtn}>View</button>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "10px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    minHeight: "260px", // slightly taller
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imagePlaceholder: {
    width: "100%",
    height: "150px", // was 120px, now taller
    backgroundColor: "#ddd",
    borderRadius: "6px",
    marginBottom: "12px",
  },
  viewBtn: {
    background: "yellow",
    padding: "8px 16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SellerProducts;
