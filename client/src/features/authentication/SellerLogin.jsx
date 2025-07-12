import { Link } from "react-router-dom";
import LogInLink from "./LogInLink";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import ProfileCreate from "../SellerProfile/ProfileCreate";

function SellerLogin() {
  const [showCreate, setShowCreate] = useState(false);

  function handleToggle() {
    setShowCreate((prev) => !prev);
  }

  return (
    <>
      <header className="top-bar2">
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="header-buttons">
          {/* Seller */}

          {/* <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "3px" }}>
              <BsPersonCircle size={25} color="#555" />
            </div>
            <LogInLink username="" />
          </div> */}

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>
      {showCreate ? (
        <ProfileCreate />
      ) : (
        <div style={containerStyle}>
          {/* Left Panel */}
          <div style={leftPanelStyle}>
            <h2 style={{ marginBottom: "20px" }}>Login</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
              Get access to your Orders, <br />
              Wishlist and Recommendations
            </p>
            <div style={{ marginTop: "40px" }}>
              <img
                src="https://img.icons8.com/clouds/100/laptop.png"
                alt="Visual"
                style={imageStyle}
              />
            </div>
          </div>

          {/* Right Panel */}
          <div style={rightPanelStyle}>
            <input
              type="text"
              placeholder="Enter Email/Mobile number"
              style={inputStyle}
            />

            <p style={infoTextStyle}>
              By continuing, you agree to Flipkart's{" "}
              <a href="#" style={linkStyle}>
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" style={linkStyle}>
                Privacy Policy
              </a>
              .
            </p>

            <button style={buttonStyle}>Request OTP</button>

            <div style={footerStyle}>
              <p style={linkStyle} onClick={handleToggle}>
                New to ShopZone? craete an account
              </p>

              {/* <a href="#" style={linkStyle}>
              New to ShopeZone? Create an account
            </a> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const containerStyle = {
  display: "flex",
  fontFamily: "sans-serif",
  height: "100vh",
  margin: "5px",
  backgroundColor: "#f1f3f6",
};

const leftPanelStyle = {
  width: "35%",
  backgroundColor: "#2874f0",
  color: "white",
  padding: "40px 20px",
  marginLeft: "10%",
};

const rightPanelStyle = {
  width: "40%",
  backgroundColor: "white",
  padding: "60px 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const inputStyle = {
  padding: "10px",
  border: "none",
  borderBottom: "2px solid #2874f0",
  fontSize: "16px",
  marginBottom: "30px",
  outline: "none",
};

const infoTextStyle = {
  fontSize: "13px",
  marginBottom: "30px",
};

const linkStyle = {
  color: "#2874f0",
  textDecoration: "underline",
  cursor: "pointer",
};

const buttonStyle = {
  backgroundColor: "#fb641b",
  color: "white",
  padding: "12px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
};

const footerStyle = {
  marginTop: "30px",
  textAlign: "center",
};

const imageStyle = {
  width: "100px",
  marginTop: "40px",
};

export default SellerLogin;
