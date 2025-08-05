import { useEffect, useState } from "react";
import SellerProducts from "./SellerProducts";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const categories = ["Electronics", "Clothing", "Home", "Toys", "Books"];

const Profile = () => {
  const [sellerData, setSellerData] = useState(null);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const sellerToken = localStorage.getItem("sellerToken");

    if (sellerToken) {
      try {
        const decoded = jwtDecode(sellerToken);
        console.log(decoded);

        fetch(`http://localhost:3002/api/v1/seller/${decoded.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("data: ", data?.data?.seller);
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

  const handleUploader = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  function handleFileUpload() {
    if (!previewImage) alert("No file");
  }

  const sellerId = sellerData?._id;
  console.log("sellerId:", sellerId);

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>
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
            <button
              onClick={() => {
                setShowAddProductForm(true);
              }}
            >
              Add Product
            </button>
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
      {showAddProductForm && (
        <div style={design.modalOverlay}>
          <div style={design.modalCard}>
            <button
              onClick={() => setShowAddProductForm(false)}
              style={design.closeButton}
            >
              ✕
            </button>

            <div style={design.uploadSection}>
              {!previewImage ? (
                <>
                  <div>
                    <label style={{ ...design.uploadButton, zIndex: 1 }}>
                      select from your computer
                      <input type="file" onChange={handleUploader} hidden />
                    </label>
                  </div>
                </>
              ) : (
                <label style={design.imageWrapper}>
                  <div>hello</div>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={design.fullImage}
                  />
                  <input type="file" onChange={handleUploader} hidden />
                </label>
              )}
            </div>

            <div style={design.formSection}>
              <form style={design.form} onSubmit={handleFileUpload}>
                <label style={design.label}>
                  Add item location:
                  <input type="text" name="location" style={design.input} />
                </label>

                <label style={design.label}>
                  Add Item Name:
                  <input type="text" name="name" style={design.input} />
                </label>

                <label style={design.label}>
                  Add Item Description:
                  <textarea name="description" style={design.textarea} />
                </label>

                <button type="submit" style={design.submitButton}>
                  Submit Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
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

const design = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    cursor: "pointer",
  },

  fullImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  modalCard: {
    display: "flex",
    width: "1200px", // ⬅️ Increased from 800px
    height: "800px", // ⬅️ Increased from 500px
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },

  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#936e6e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
  backButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#936e6e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
  uploadSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Important for absolute image
    backgroundColor: "rgb(35 33 33)",
    height: "100%", // Ensure full height
    width: "100%", // Ensure full width
  },

  uploadButton: {
    padding: "10px 20px",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  formSection: {
    flex: 0.55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(29 31 37)",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "80%",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
    height: "80px",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Profile;
