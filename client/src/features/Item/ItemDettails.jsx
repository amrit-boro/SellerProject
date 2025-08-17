import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function ItemDetails({
  images,
  description,
  sellerProfile,
  Location,
  price,
  _id,
  username,
}) {
  const navigate = useNavigate();
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  const [showImageModal, setShowImageModal] = useState(false);
  const [show, setShonw] = useState(false);

  function handleBorrow() {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/borrow/${_id}`, {
        state: {
          images,
          username,
          sellerProfilePic,
          sellerName,
          sellerPhone,
          sellerEmail,
          price,
          _id,
        },
      });
    }
  }

  function handleImageClick() {
    setShowImageModal(true);
  }

  function handleCloseModal() {
    setShowImageModal(false);
  }
  function handleToggle() {
    navigate(`/profile/${sellerName}/${_id}`, {
      state: {
        sellerName,
        sellerAbout,
        sellerProfilePic,
        sellerLocation,
        sellerEmail,
        sellerPhone,
      },
    });
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
  const sellerProfilePic = sellerProfile?.SellerProfilePic;
  const sellerName = sellerProfile?.sellerName;
  const sellerLocation = sellerProfile?.sellerAddress;
  const sellerEmail = sellerProfile?.sellerEmail;
  const sellerPhone = sellerProfile?.sellerPhone;
  const sellerAddress = sellerProfile?.sellerAddress;
  const sellerAbout = sellerProfile?.sellerAbout || "No description available";

  return (
    <div style={styles.container}>
      {/* Left: Image */}
      <div style={styles.imageContainer}>
        <img
          src={images}
          alt="Product"
          style={styles.image}
          onClick={handleImageClick}
        />
      </div>

      {/* Right: Info */}
      <div style={styles.info}>
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <img src={sellerProfilePic} alt="Seller" style={styles.profileImg} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <div className="seller_info" onClick={handleToggle}>
              {sellerName}
            </div>
            <div style={{ fontSize: "16px", fontStyle: "Helvetica Neue" }}>
              {sellerAddress}
            </div>
            <div style={{ fontSize: "14px" }}>Hii I'm {sellerName}</div>
            <div style={{ fontSize: "13px" }}> rat: ⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <div style={styles.title}>
          {description.slice(0, 196) + ""}

          {show ? (
            <span>
              {description.slice(196)}{" "}
              <span
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  setShonw(false);
                }}
              >
                see less
              </span>
            </span>
          ) : (
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setShonw(true)}
            >
              see more
            </span>
          )}
        </div>

        <div>
          <span style={styles.rating}>4.7 ★</span>
          <span style={styles.ratingText}>(128 ratings)</span>
        </div>

        <div style={styles.emi}>₹111/month</div>

        <div style={styles.priceSection}>
          <span style={styles.price}>₹{price}</span>
          <span style={styles.strike}>₹1,499</span>
          <span style={styles.discount}>40% off</span>
        </div>

        <div style={styles.offers}>
          <div style={styles.offerItem}>
            <span style={styles.offerIcon}>🏦</span>
            5% Cashback on Flipkart Axis Bank Credit Card
          </div>
          <div style={styles.offerItem}>
            <span style={styles.offerIcon}>💳</span>
            10% off on EMI transactions above ₹5000
          </div>
          <div style={styles.offerItem}>
            <span style={styles.offerIcon}>🎁</span>
            Extra ₹100 Off on first purchase
          </div>
        </div>

        <div style={styles.buttons}>
          <button
            style={{ ...styles.button, ...styles.buyNow }}
            onClick={handleBorrow}
          >
            Borrow Now
          </button>
          <button style={{ ...styles.button, ...styles.emiBtn }}>
            PAY WITH EMI
          </button>
        </div>
      </div>
      {showImageModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "8px",
                right: "12px",
                background: "#f57c00",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
              onClick={handleCloseModal}
            >
              ×
            </button>
            <img
              src={images}
              alt="Zoomed"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const mainColor = "#f57c00";

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    backgroundColor: "#fff",
    display: "flex",
    gap: "42px",
    // flexWrap: "wrap",
    fontFamily: "Arial, sans-serif",
  },
  imageContainer: {
    flex: "1 1 40%",
    minWidth: "280px",
  },
  image: {
    maxWidth: "100%", // fit the container width, but don’t stretch
    maxHeight: "100%", // limit height (adjust to your design)
    objectFit: "cover", // or "contain" if you want to show full image
    borderRadius: "8px",
    display: "block",
    margin: "0 auto",
  },
  profileImg: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  info: {
    flex: "1 1 60%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#222",
  },
  rating: {
    backgroundColor: "#388e3c",
    color: "#fff",
    display: "inline-block",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "14px",
    marginRight: "8px",
  },
  ratingText: {
    fontSize: "14px",
    color: "#555",
  },
  emi: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "15px 0 5px",
  },
  priceSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "24px",
    color: "#388e3c",
    fontWeight: "bold",
  },
  strike: {
    textDecoration: "line-through",
    color: "#888",
    fontSize: "14px",
  },
  discount: {
    color: "green",
    fontSize: "14px",
  },
  offers: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
  offerItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },
  offerIcon: {
    fontSize: "16px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
  buyNow: {
    backgroundColor: mainColor,
    color: "#fff",
  },
  emiBtn: {
    backgroundColor: "#f1f1f1",
    color: "#000",
  },
};
export default ItemDetails;
