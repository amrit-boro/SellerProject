import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchName } from "../searchSlice";
import LogInLink from "../authentication/LogInLink";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function VisitProfile() {
  const products = [
    {
      id: 1,
      name: "Electric Kettle",
      price: "₹1499",
      image: "https://source.unsplash.com/200x200/?kettle",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },

    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },
    {
      id: 2,
      name: "LED Desk Lamp",
      price: "₹899",
      image: "https://source.unsplash.com/200x200/?lamp",
    },

    // Add more products...
  ];
  // Login User name
  const username = useSelector((state) => state.user.username);

  const location = useLocation();
  const sellerName = location.state;

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
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="visit-profile-img"
            />
            <h2>{sellerName}</h2>
            <p>
              I sell beautiful handmade crafts, kitchenware, and home
              accessories.
            </p>
            <p className="visit-location">
              Guwahati Amingaon Kalipahar jayguru
            </p>
            <p className="visit-rating">
              ⭐ 4.7 <span>(128 reviews)</span>
            </p>

            <p>
              <strong>Email:</strong> jane@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
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
              {products.map((product, index) => (
                <div className="visit-product-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p className="price">{product.price}</p>
                  <button>View Product</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitProfile;
