import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Borrow() {
  const [formData, setFormData] = useState({
    fullName: "",
    userId: "",
    email: "",
    phoneNumber: "",
    itemName: "",
    itemId: "",
    borrowDate: "",
    purpose: "",
    agreeTerms: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const x = location.state;
  console.log("values: ", x);

  // lOCATION...................................................................................
  const {
    images,
    itemName,
    price,
    username,
    sellerName,
    sellerProfilePic,
    sellerPhone,
    sellerEmail,
    _id,
  } = location.state;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName) return;

    console.log("Borrow Request Submitted:", formData);
    // Add validation or send to server
  };
  function handleToggle() {
    navigate(`/profile/${sellerName}/${_id}`, {
      state: {
        sellerName,
        sellerProfilePic,
        sellerEmail,
        sellerPhone,
      },
    });
  }

  return (
    <>
      <header className="top-bar2" style={styles.header}>
        <Link className="logo2" to={"/"} style={styles.logo}>
          ShopeZone
        </Link>

        <div className="account2">Hello {username}</div>
      </header>

      <form style={styles.flexWrapper} onSubmit={handleSubmit}>
        {/* Left: Product Image */}
        <div style={styles.imageContainer}>
          <img src={images} alt="Product" style={styles.productImage} />
          <span
            style={{
              marginTop: "14px",
            }}
          >
            <h2>{itemName}</h2>
          </span>
          <div
            style={{ marginTop: "3px", fontSize: "20px", fontWeight: "bold" }}
          >
            <span>
              Rs: <span style={{ color: "green" }}>{price} ₹</span>
            </span>
          </div>
        </div>

        {/* Right: Form Fields */}
        <div style={styles.formContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <h2 style={styles.heading}>Borrow Item Request </h2>
            {/* Profile image....................................................... */}
            <div
              onClick={handleToggle}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <img
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                src={sellerProfilePic}
                alt="Amrita"
              />
              <h3 style={styles.nameheading}>{sellerName}</h3>
            </div>
          </div>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label style={styles.label}>Phone Number</label>
          <input
            style={styles.input}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />{" "}
          <label style={styles.label}>Borrow Date</label>
          <input
            style={styles.input}
            type="date"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            required
          />{" "}
          <label style={styles.label}>Purpose of Borrowing</label>
          <textarea
            style={{ ...styles.input, resize: "vertical", height: "60px" }}
            name="purpose"
            rows="3"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Describe purpose (optional)"
            required
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
    flexDirection: "column",
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
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  nameheading: {
    marginLeft: "5px",
    marginTop: "7px",
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
