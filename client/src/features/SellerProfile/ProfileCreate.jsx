import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSellerName } from "./sellerSlice";

export default function ProfileCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seller = useSelector((state) => state.seller); // Gives you all the seller values...
  console.log(seller);
  const [formData, setFormData] = useState({
    name: seller.sellerName || "",
    email: seller.sellerEmail || "",
    mobile: seller.sellerPhone || "",
    address: seller.sellerAddress || "",
    pan: seller.sellerPanCard || "",
    accountHolder: seller.sellerAccountHolder || "", // Assuming account holder is the seller name
    accountNumber: seller.sellerAccountNumber || "",
    ifsc: seller.sellerIFSC || "",
    agreement: seller.sellerAgreement || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "categories") {
      // handle multi-select checkboxes
      setFormData((prev) => {
        const updated = new Set(prev.categories);
        if (checked) updated.add(value);
        else updated.delete(value);
        return { ...prev, categories: Array.from(updated) };
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/sellerprofile");
    // TODO: send formData to your API
  };

  // Basic inline styles

  return (
    <form style={styles.container} onSubmit={handleSubmit}>
      <h2>Become a Seller</h2>

      <div style={styles.field}>
        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Email Address</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Mobile Number</label>
        <input
          style={styles.input}
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Address</label>
        <textarea
          style={styles.input}
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>PAN Number</label>
        <input
          style={styles.input}
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Bank Account Holder</label>
        <input
          style={styles.input}
          type="text"
          name="accountHolder"
          value={formData.accountHolder}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Account Number</label>
        <input
          style={styles.input}
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>IFSC Code</label>
        <input
          style={styles.input}
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
          required
        />
      </div>

      {/* <div style={styles.field}>
        <label style={styles.label}>Product Categories</label>
        <div style={styles.checkboxGroup}>
          {categories.map((cat) => (
            <label key={cat} style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="categories"
                value={cat}
                checked={formData.categories.includes(cat)}
                onChange={handleChange}
              />
              {cat}
            </label>
          ))}
        </div>
      </div> */}

      {/* <div style={styles.field}>
        <label style={styles.label}>Brand (optional)</label>
        <input
          style={styles.input}
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div> */}

      <div
        style={{ ...styles.field, flexDirection: "row", alignItems: "center" }}
      >
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          required
        />
        <label style={{ marginLeft: 8 }}>
          I agree to the Terms & Conditions
        </label>
      </div>

      <button
        style={styles.button}
        type="submit"
        disabled={!formData.agreement}
      >
        Register as Seller
      </button>
    </form>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "1rem auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#e1e1eb",
  },
  textarea: {
    width: "90%",
    height: "120px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  field: { display: "flex", flexDirection: "column", marginBottom: "1rem" },
  label: { marginBottom: "0.5rem", fontWeight: "bold" },
  input: { padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" },
  checkboxGroup: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: "0.25rem" },
  button: {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: 4,
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};
