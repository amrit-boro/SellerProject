import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function ItemDetails({
  images,
  SellerName,
  description,
  Location,
  itemName,
  _id,
  username,
}) {
  const navigate = useNavigate();
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  const [showImageModal, setShowImageModal] = useState(false);

  function handleBorrow() {
    if (!isAuthenticate) {
      navigate("/login");
    } else {
      navigate(`/borrow/${_id}`, {
        state: { images, itemName, username, SellerName, _id },
      });
    }
  }

  function handleToggle() {
    navigate(`/profile/${SellerName}/${_id}`, { state: SellerName });
  }

  function handleImageClick() {
    setShowImageModal(true);
  }

  function handleCloseModal() {
    setShowImageModal(false);
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowImageModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Image + Buttons + About */}
        <div style={styles.imageSection}>
          <img
            src={images}
            alt="Product"
            style={styles.image}
            onClick={handleImageClick}
          />
          <p>ratings:⭐⭐⭐⭐⭐</p>
          <div style={styles.actions}>
            <button style={styles.btnCart}>Add to Cart</button>
            <button style={styles.btnBorrow} onClick={handleBorrow}>
              Borrow
            </button>
          </div>

          <div style={styles.about}>
            <strong>About Product:</strong>
            <br />
            {/* Description.........  */}
            {description}
            <br />
            <strong>Availabe:</strong>{" "}
            <span style={{ fontWeight: "bold" }}> {formattedDate}</span> to{" "}
            <span style={{ fontWeight: "bold" }}>27/08/2025</span>
            <br />
            <strong>Condition:</strong> Good
            <br />
          </div>
        </div>

        {/* Seller Info */}
        <div style={styles.sellerCard}>
          <div style={styles.profileBtn} onClick={handleToggle}>
            Profile
          </div>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Seller"
            style={styles.profileImg}
          />
          <h2 style={styles.name}>{SellerName}</h2>
          <p style={styles.desc}>
            I sell beautiful handmade crafts, kitchenware, and home accessories.
          </p>
          <p style={styles.location}>{Location}</p>
          <p style={styles.rating}>
            ⭐ <span style={styles.star}>4.7</span>{" "}
            <span style={styles.reviews}>(128 reviews)</span>
          </p>
          <p style={styles.contact}>Email: jane@example.com</p>
          <p style={styles.contact}>Phone: +91 98765 43210</p>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {showImageModal && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <img src={images} alt="Zoomed" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    gap: "30px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    maxW_idth: "900px",
    margin: "0 auto",
    alignItems: "flex-start",
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "0 0 514px",
  },
  image: {
    width: "340px",
    height: "300px",
    borderRadius: "8px",
    objectFit: "contain",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    cursor: "pointer",
  },

  actions: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  btnCart: {
    padding: "10px 24px",
    fontSize: "14px",
    backgroundColor: "#f5a400",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  btnBorrow: {
    padding: "10px 24px",
    fontSize: "14px",
    backgroundColor: "#f5a400",
    color: "black",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  about: {
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    padding: "10px 20px",
    borderRadius: "8px",
    width: "100%",
    textAlign: "left",
    fontSize: "14px",
    color: "#333",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)",
    lineHeight: "1.5",
    borderLeft: "4px solid #f5a400",
  },
  sellerCard: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "12px",
    position: "relative",
    textAlign: "center",
    maxW_idth: "500px",
  },
  profileBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#7f3fff",
    color: "white",
    padding: "6px 14px",
    fontSize: "12px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  profileImg: {
    w_idth: "80px",
    height: "80px",
    borderRadius: "50%",
    marginTop: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "10px 0",
  },
  desc: {
    fontSize: "14px",
    color: "#333",
  },
  location: {
    fontSize: "13px",
    color: "#777",
    marginTop: "8px",
  },
  rating: {
    fontSize: "14px",
    margin: "12px 0",
  },
  star: {
    fontWeight: "bold",
    color: "#ff9500",
  },
  reviews: {
    color: "#777",
    fontWeight: "normal",
  },
  contact: {
    fontSize: "14px",
    color: "#444",
    margin: "4px 0",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modalContent: {
    position: "relative",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto", // ✅ allow scroll if image is bigger
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh", // ✅ limit height to fit screen
    objectFit: "contain",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  },
  closeButton: {
    position: "absolute",
    top: "10px", // ✅ move ins_ide
    right: "10px", // ✅ move ins_ide
    backgroundColor: "white",
    border: "none",
    fontSize: "20px",
    color: "#333",
    cursor: "pointer",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    lineHeight: "32px",
    textAlign: "center",
  },
};

export default ItemDetails;
