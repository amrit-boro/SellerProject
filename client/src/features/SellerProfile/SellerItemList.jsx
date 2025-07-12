function SellerItemList({ items }) {
  // const x = items;
  // console.log(x);
  const { name, price, images } = items; // This is coming from the real database..... not from the supabase

  return (
    <>
      <div style={styles.productCard}>
        <img src={images} alt="Product" style={styles.productImg} />
        <h4 style={styles.productTitle}>{name}</h4>
        <p style={styles.productPrice}>₹{price}</p>

        <button style={styles.viewBtn}>View</button>
      </div>
    </>
  );
}

const styles = {
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "220px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  productCardHover: {
    transform: "scale(1.02)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  },
  productImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  productTitle: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "6px",
  },
  productPrice: {
    color: "#008000",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  viewBtn: {
    padding: "8px 16px",
    backgroundColor: "#ffe600",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    color: "#333",
  },
};

// const styles = {
//   container: {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Arial, sans-serif",
//   },
//   sidebar: {
//     width: "60vh",
//     borderRight: "1px solid #ccc",
//     padding: "20px",
//     boxSizing: "border-box",
//   },
//   profileSection: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   avatar: {
//     width: "80px",
//     height: "80px",
//     borderRadius: "50%",
//     backgroundColor: "gray",
//     margin: "0 auto 10px",
//   },
//   sidebarButtons: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   mainContent: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   navbar: {
//     display: "flex",
//     borderBottom: "1px solid #ccc",
//     padding: "10px 20px",
//     alignItems: "center",
//     gap: "15px",
//     backgroundColor: "#f9f9f9",
//   },
//   navItem: {
//     padding: "6px 12px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
//     gap: "20px",
//     padding: "20px",
//   },
//   productCard: {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//   },
//   imagePlaceholder: {
//     width: "100%",
//     height: "120px",
//     backgroundColor: "#aaa",
//     borderRadius: "4px",
//     marginBottom: "10px",
//   },
// };
export default SellerItemList;
