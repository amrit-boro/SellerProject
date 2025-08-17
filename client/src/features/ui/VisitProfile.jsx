import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import LogInLink from "../authentication/LogInLink";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAllsellerProducts, useProducts } from "../user/useProduct";
import ItemSkeleton from "./ItemSkeleton";
import { useState } from "react";
import GetAllProducts from "./GetAllProducts";

function VisitProfile() {
  // Login User name
  const { id } = useParams();

  const { data: getAllseeProducts, isLoading: getAllseeProducts_Loading } =
    useGetAllsellerProducts(id);

  const { data, isLoading, isError } = useProducts(); // coming from the real database... use this every where to access the value....
  const products = data?.data?.products || [];

  const all_products = products.map((item) => item);

  const [showImageModal, setShowImageModal] = useState(false);

  const getAllsellerProducts = getAllseeProducts?.data?.relatedProducts || [];
  console.log("all seller products: ", getAllsellerProducts);

  const username = useSelector((state) => state.user.username);
  const location = useLocation();

  const {
    sellerName,
    sellerProfilePic,
    sellerLocation,
    sellerEmail,
    sellerPhone,
    sellerAbout,
  } = location.state;

  function handleImageClick() {
    setShowImageModal(true);
  }
  function handleCloseModal() {
    setShowImageModal(false);
  }

  return (
    <>
      <div className="visit-page">
        <header className="top-bar2">
          {/* <div className="logo2">ShopeZone</div> */}
          <Link className="logo2" to={"/"}>
            ShopZone
          </Link>

          <div className="header-buttons">
            {/* Seller */}
            <Link className="login-button-1" to={"/profile"}>
              Become a seller
            </Link>

            <div style={{ display: "flex" }}>
              <div style={{ paddingTop: "3px" }}>
                <BsPersonCircle size={25} color="#555" />
              </div>
              <LogInLink username={username} />
            </div>
          </div>
        </header>
        <div className="visit-main-content">
          <div className="visit-profile-card">
            {/* Seller Profile................................................. */}
            <img
              src={sellerProfilePic}
              alt="Profile"
              className="visit-profile-img"
              onClick={handleImageClick}
            />
            <h2>{sellerName}</h2>
            <p>{sellerAbout}</p>
            <p className="visit-location">{sellerLocation}</p>
            <p className="visit-rating">
              ⭐ 4.7 <span>(128 reviews)</span>
            </p>

            <p>
              <strong>Email:</strong> {sellerEmail}
            </p>
            <p>
              <strong>Phone:</strong> +91 {sellerPhone}
            </p>

            <div>
              <div className="visit-social-icons">
                <div style={{ display: "flex", gap: "18px" }}>
                  <FaInstagram />
                  <FaFacebook />
                  <FaWhatsapp />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="visit-product-section">
            <div className="visit-section-header">Products</div>
            <div className="visit-product-grid">
              {getAllseeProducts_Loading ? (
                <ItemSkeleton card={5} />
              ) : (
                getAllsellerProducts.map((product) => (
                  <GetAllProducts
                    product={product}
                    all_products={all_products}
                    key={product._id}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {showImageModal && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <img
              src={sellerProfilePic}
              alt="Zoomed"
              style={styles.modalImage}
            />
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
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
    overflow: "auto",
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
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

export default VisitProfile;
