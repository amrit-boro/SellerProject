import { useEffect, useState } from "react";
import SellerProducts from "./SellerProducts";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const categories = ["Electronics", "Clothing", "Home", "Toys", "Books"];

const Profile = () => {
  const [sellerData, setSellerData] = useState(null);

  useEffect(() => {
    const sellerToken = localStorage.getItem("sellerToken");

    if (sellerToken) {
      try {
        const decoded = jwtDecode(sellerToken);
        console.log("sellerId:", decoded.id);

        fetch(`http://localhost:3002/api/v1/seller/${decoded.id}`)
          .then((res) => res.json())
          .then((data) => {
            setSellerData(data?.data?.seller);
          })
          .catch((error) => {
            console.log("Failed to fetch seller Data", error);
          });
      } catch (error) {
        console.log("Invalid Token", error);
      }
    }
  }, []);

  const sellerId = sellerData?._id;

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
          {!sellerData ? (
            <p>Loading...</p>
          ) : (
            <div style={styles.profileSection}>
              <img
                src={sellerData?.SellerProfilePic}
                alt="Profile"
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #ccc",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <p>{sellerData?.sellerName}</p>
              <p>About: {sellerData?.sellerAbout}</p>
              <p>My ratings: ⭐ {sellerData?.rating || "4.5"}</p>
            </div>
          )}

          <div style={styles.sidebarButtons}>
            {/* <button onClick={() => setShowEditor(true)}>Edit Profile</button> */}
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
            <SellerProducts sellerId={sellerId} />
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
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
  navItem: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Profile;
