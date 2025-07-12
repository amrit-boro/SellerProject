import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Borrow() {
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    email: "",
    phoneNumber: "",
    organization: "",
    itemName: "",
    itemId: "",
    category: "",
    borrowDate: "",
    returnDate: "",
    purpose: "",
    agreeTerms: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const img = location.state;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Borrow Request Submitted:", formData);
    // Add validation or send to server
  };

  return (
    <>
      <header className="top-bar2" style={styles.header}>
        <Link className="logo2" to={"/"} style={styles.logo}>
          ShopeZone
        </Link>
        <div className="search-container">
          <input type="text" />
          <button className="search-button">🔍</button>
        </div>
        <div className="account2">Hello</div>
      </header>

      <form style={styles.flexWrapper} onSubmit={handleSubmit}>
        {/* Left: Product Image */}
        <div style={styles.imageContainer}>
          <img src={img} alt="Product" style={styles.productImage} />
        </div>

        {/* Right: Form Fields */}
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Borrow Item Request</h2>

          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Item Name", name: "itemName", type: "text" },
            { label: "Borrow Date", name: "borrowDate", type: "date" },
            { label: "Expected Return Date", name: "returnDate", type: "date" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label style={styles.label}>{label}</label>
              <input
                style={styles.input}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <label style={styles.label}>Purpose of Borrowing</label>
          <textarea
            style={{ ...styles.input, resize: "vertical", height: "60px" }}
            name="purpose"
            rows="3"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Describe purpose (optional)"
          />

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label style={{ fontSize: "13px" }}>
              I agree to the terms and conditions
            </label>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={() => navigate(-1)}
              style={styles.button}
            >
              Cancel
            </button>
            <button type="submit" style={styles.button}>
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: "#192734",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  flexWrapper: {
    display: "flex",
    width: "95%",
    maxWidth: "1100px",
    margin: "20px auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },
  imageContainer: {
    width: "30%",
    backgroundColor: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  productImage: {
    width: "100%",
    maxWidth: "230px",
    borderRadius: "6px",
  },
  formContainer: {
    width: "70%",
    padding: "20px 25px",
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "4px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    gap: "8px",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Borrow;
