import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  updateSellerAbout,
  updateSellerAddress,
  updateSellerName,
} from "../SellerProfile/sellerSlice";
import { useState } from "react";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seller = useSelector((state) => state.seller);
  const [formData, setFormData] = useState({
    sellerName: seller.sellerName,
    sellerAddress: seller.sellerAddress,
    sellerAbout: seller.sellerAbout,
  });

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !formData.sellerName ||
      !formData.sellerAddress ||
      !formData.sellerAbout
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    dispatch(updateSellerName(formData.sellerName));
    dispatch(updateSellerAddress(formData.sellerAddress));
    dispatch(updateSellerAbout(formData.sellerAbout));
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <form style={styles.container} onSubmit={handleSave}>
        <label style={styles.label}>Name</label>
        <input
          style={styles.input}
          type="text"
          name="sellerName"
          value={formData.sellerName}
          onChange={handleChange}
        />

        <label style={styles.label}>Location</label>
        <input
          style={styles.input}
          type="text"
          name="sellerAddress"
          value={formData.sellerAddress}
          onChange={handleChange}
        />

        <label style={styles.label}>About</label>
        <input
          style={styles.input}
          type="text"
          name="sellerAbout"
          value={formData.sellerAbout}
          onChange={handleChange}
          required
        />

        <button style={styles.button} type="submit">
          Save Info
        </button>
      </form>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  label: {
    fontWeight: "600",
    marginBottom: "5px",
    display: "block",
    fontSize: "15px",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default EditProfile;
