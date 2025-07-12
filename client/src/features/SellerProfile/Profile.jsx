import { useEffect, useState } from "react";
import SellerProducts from "./SellerProducts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const categories = ["Electronics", "Clothing", "Home", "Toys", "Books"];

const Profile = ({ seller }) => {
  const [showEditor, setShowEditor] = useState(false);
  const navigate = useNavigate();

  const sellerName = useSelector((state) => state.seller.sellername);
  console.log("seller name:", sellerName);

  useEffect(() => {
    if (showEditor) {
      navigate("/sellerprofile/editsellerProfile");
    }
  }, [showEditor, navigate]);

  const location = useLocation();
  const { name, about } = location.state;

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="header-buttons">
          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.profileSection}>
            <div style={styles.avatar}></div>
            <p>{sellerName || "user name"}</p>
            <p>About : {about}</p>
            <p>My ratings: ⭐ {seller?.rating || "4.5"}</p>
          </div>
          <div style={styles.sidebarButtons}>
            <button onClick={() => setShowEditor(true)}>Edit Profile</button>
            <button>Add Product</button>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <div style={styles.navbar}>
            {categories.map((cat, index) => (
              <div key={index} style={styles.navItem}>
                {cat}
              </div>
            ))}
            <div
              style={{
                marginLeft: "auto",
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
              }}
            >
              <div>Orders</div>
              <div>☰</div>
            </div>
          </div>

          <div style={styles.scrollableContent}>
            <SellerProducts />
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "70vh",
    borderRight: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 auto 10px",
  },
  sidebarButtons: {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  navbar: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    padding: "10px 20px",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "rgb(231 222 222)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  scrollableContent: {
    flex: 1, // THIS makes the content stretch vertically
    overflowY: "auto",
    overflowX: "hidden", // prevent horizontal scroll
  },

  navItem: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Profile;
