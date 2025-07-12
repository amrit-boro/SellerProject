import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSellerName } from "../SellerProfile/sellerSlice";

const initialData = {
  phone: "9876543210",
  location: "guwahati",
  about: "hello, I sell sports products.",
};

function EditProfile() {
  const [sellerInfo, setSellerInfo] = useState(initialData);
  const dispatch = useDispatch();

  // const sellerName = useSelector((state) => state.seller.sellername);
  // console.log("serller name:", sellerName);
  const sellername = useSelector((state) => state.seller.sellername);
  console.log("selector: ", sellername);

  const handleChange = (e) => {
    setSellerInfo({
      ...sellerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!sellerInfo.about || !sellername || !sellerInfo.location) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log(sellerInfo);
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
      <div style={styles.container}>
        <label style={styles.label}>Name</label>
        <input
          style={styles.input}
          type="text"
          name="name"
          value={sellername}
          onChange={(e) => dispatch(updateSellerName(e.target.value))}
        />

        <label style={styles.label}>Location</label>
        <input
          style={styles.input}
          type="text"
          name="location"
          value={sellerInfo.location}
          onChange={handleChange}
        />

        <label style={styles.label}>About</label>
        <input
          style={styles.input}
          type="text"
          name="about"
          value={sellerInfo.about}
          onChange={handleChange}
          required
        />

        <button style={styles.button} onClick={handleSave}>
          Save Info
        </button>
      </div>
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
