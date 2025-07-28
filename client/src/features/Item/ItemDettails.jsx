import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function ItemDetails({
  images,
  description,
  sellerProfile,
  Location,
  itemName,
  price,
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
        state: {
          images,
          itemName,
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

  function handleToggle() {
    navigate(`/profile/${sellerName}/${_id}`, {
      state: {
        sellerName,
        sellerProfilePic,
        sellerLocation,
        sellerEmail,
        sellerPhone,
      },
    });
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
  const sellerProfilePic = sellerProfile?.SellerProfilePic;
  const sellerName = sellerProfile?.sellerName;
  const sellerLocation = sellerProfile?.sellerAddress;
  const sellerEmail = sellerProfile?.sellerEmail;
  const sellerPhone = sellerProfile?.sellerPhone;
  const sellerAddress = sellerProfile?.sellerAddress;

  return (
    // <div style={styles.page}>
    //   <div style={styles.container}>
    //     {/* Image + Buttons + About */}
    //     <div style={styles.imageSection}>
    //       <img
    //         src={images}
    //         alt="Product"
    //         style={styles.image}
    //         onClick={handleImageClick}
    //       />

    //       {/* Item info........................................... */}
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           marginTop: "14px",
    //         }}
    //       >
    //         <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
    //           {itemName}
    //         </div>

    //         <div style={{ marginTop: "8px" }}>
    //           <span style={{ fontWeight: "bold" }}>Rs: </span>
    //           <span
    //             style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
    //           >
    //             {price}
    //           </span>
    //         </div>
    //         <div style={{ marginTop: "8px", fontWeight: "bold" }}>
    //           ratings: ⭐⭐⭐⭐⭐
    //         </div>
    //         <div style={styles.actions}>
    //           <button style={styles.btnCart}>Add to Cart</button>
    //           <button style={styles.btnBorrow} onClick={handleBorrow}>
    //             Borrow
    //           </button>
    //         </div>
    //       </div>

    //       {/* ............................................................... */}

    //       <div style={styles.about}>
    //         <strong>About Product:</strong>
    //         <br />
    //         {/* Description.........  */}
    //         {description}
    //         <br />
    //         <strong>Availabe:</strong>{" "}
    //         <span style={{ fontWeight: "bold" }}> % {formattedDate}</span> to{" "}
    //         <span style={{ fontWeight: "bold" }}>27/08/2025</span> %
    //         <br />
    //         <strong>Condition:</strong> %GOOD%
    //         <br />
    //       </div>
    //     </div>

    //     {/* Seller Info.......................................................................... */}
    //     <div style={styles.sellerCard}>
    //       <div style={styles.profileBtn} onClick={handleToggle}>
    //         Profile
    //       </div>
    //       <img src={sellerProfilePic} alt="Seller" style={styles.profileImg} />
    //       {/* Seller Name */}
    //       <h2 style={styles.name}>{sellerName}</h2>

    //       <p style={styles.desc}>
    //         % I sell beautiful handmade crafts, kitchenware, and home
    //         accessories. %
    //       </p>

    //       <p style={styles.location}>{Location}</p>
    //       <p style={styles.rating}>
    //         ⭐ <span style={styles.star}>4.7</span>{" "}
    //         <span style={styles.reviews}>% (128 reviews) %</span>
    //       </p>
    //       <p style={styles.contact}>Email: {sellerEmail}</p>
    //       <p style={styles.contact}>Phone: +91 {sellerPhone}</p>
    //     </div>
    //   </div>

    //   {/* Modal for zoomed image */}
    //   {showImageModal && (
    //     <div style={styles.modalOverlay} onClick={handleCloseModal}>
    //       <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
    //         <button style={styles.closeButton} onClick={handleCloseModal}>
    //           ×
    //         </button>
    //         <img src={images} alt="Zoomed" style={styles.modalImage} />
    //       </div>
    //     </div>
    //   )}
    // </div>
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
          % NSVL Sauce Pan 15cm Stainless Steel (1L) – Induction & Gas
          Compatible %
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
            BUY NOW
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

// const isMobile = window.innerWidth < 768;

// const styles = {
//   page: {
//     padding: "20px",
//     fontFamily: "Segoe UI, sans-serif",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   container: {
//     display: "flex",
//     flexDirection: isMobile ? "column" : "row",
//     gap: "20px",
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 0 20px rgba(0,0,0,0.1)",
//     width: isMobile ? "90%" : "80%",
//     margin: "0 auto",
//     alignItems: "flex-start",
//   },
//   imageSection: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: isMobile ? "100%" : "514px",
//   },
//   image: {
//     width: isMobile ? "100%" : "340px",
//     height: isMobile ? "auto" : "300px",
//     borderRadius: "8px",
//     objectFit: "contain",
//     backgroundColor: "#eee",
//     border: "1px solid #ccc",
//     cursor: "pointer",
//   },
//   actions: {
//     display: "flex",
//     gap: "12px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     marginTop: "15px",
//   },
//   btnCart: {
//     padding: "10px 24px",
//     fontSize: "14px",
//     backgroundColor: "#f5a400",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   btnBorrow: {
//     padding: "10px 24px",
//     fontSize: "14px",
//     backgroundColor: "#f5a400",
//     color: "black",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   about: {
//     marginTop: "20px",
//     backgroundColor: "#f9f9f9",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     width: "100%",
//     textAlign: "left",
//     fontSize: "14px",
//     color: "#333",
//     boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)",
//     lineHeight: "1.5",
//     borderLeft: "4px solid #f5a400",
//   },
//   sellerCard: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//     padding: "20px",
//     borderRadius: "12px",
//     position: "relative",
//     textAlign: "center",
//     width: isMobile ? "100%" : "500px",
//   },
//   profileBtn: {
//     position: "absolute",
//     top: "15px",
//     right: "15px",
//     backgroundColor: "#7f3fff",
//     color: "white",
//     padding: "6px 14px",
//     fontSize: "12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//   },
//   profileImg: {
//     width: "80px",
//     height: "80px",
//     borderRadius: "50%",
//     marginTop: "10px",
//   },
//   name: {
//     fontSize: "20px",
//     fontWeight: "600",
//     margin: "10px 0",
//   },
//   desc: {
//     fontSize: "14px",
//     color: "#333",
//   },
//   location: {
//     fontSize: "13px",
//     color: "#777",
//     marginTop: "8px",
//   },
//   rating: {
//     fontSize: "14px",
//     margin: "12px 0",
//   },
//   star: {
//     fontWeight: "bold",
//     color: "#ff9500",
//   },
//   reviews: {
//     color: "#777",
//     fontWeight: "normal",
//   },
//   contact: {
//     fontSize: "14px",
//     color: "#444",
//     margin: "4px 0",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     backdropFilter: "blur(2px)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
//   modalContent: {
//     position: "relative",
//     backgroundColor: "white",
//     padding: "10px",
//     borderRadius: "12px",
//     boxShadow: "0 0 20px rgba(0,0,0,0.4)",
//     maxWidth: "90vw",
//     maxHeight: "90vh",
//     overflow: "auto",
//   },
//   modalImage: {
//     maxWidth: "100%",
//     maxHeight: "80vh",
//     objectFit: "contain",
//     borderRadius: "10px",
//     display: "block",
//     margin: "0 auto",
//   },
//   closeButton: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "white",
//     border: "none",
//     fontSize: "20px",
//     color: "#333",
//     cursor: "pointer",
//     borderRadius: "50%",
//     width: "32px",
//     height: "32px",
//     boxShadow: "0 0 5px rgba(0,0,0,0.2)",
//     lineHeight: "32px",
//     textAlign: "center",
//   },
// };
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
    maxHeight: "300px", // limit height (adjust to your design)
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
