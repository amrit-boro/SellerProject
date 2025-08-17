import { useState } from "react";

function EditProfile({ sellername, sellerAbout }) {
  const [name, setName] = useState(sellername || "");
  const [about, setAbout] = useState(sellerAbout || "");
  const [gender, setGender] = useState("Prefer not to say");
  const [showBadge, setShowBadge] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, about, gender, showBadge };
    console.log("Form submitted:", formData);
    // Here you would send formData to backend API
  };

  return (
    <form style={styles.main_container} onSubmit={handleSubmit}>
      <h2 style={styles.title}>Edit Profile</h2>

      {/* Profile Header */}
      <div style={styles.profile_header}>
        <div style={styles.profile_pic}></div>
        <div style={styles.profile_info}>
          <p style={styles.username}>batto_kenshin</p>
          <span style={styles.name}>{sellername}</span>
        </div>
        <button type="button" style={styles.btn}>
          Change photo
        </button>
      </div>

      {/* Edit name */}
      <div style={styles.form_group}>
        <label style={styles.label}>Edit Name</label>
        <input
          type="text"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Bio */}
      <div style={styles.form_group}>
        <label style={styles.label}>About</label>
        <textarea
          style={styles.textarea}
          rows="2"
          maxLength="150"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <small style={styles.note}>{about.length} / 150</small>
      </div>

      {/* Show Threads Badge */}
      <div style={styles.form_group}>
        <label style={styles.label}>Show Threads badge</label>
        <div
          style={{
            ...styles.toggle,
            background: showBadge ? "#4b6ef5" : "#333",
          }}
          onClick={() => setShowBadge(!showBadge)}
        >
          <div
            style={{
              ...styles.toggle_circle,
              left: showBadge ? "34px" : "2px",
            }}
          ></div>
        </div>
      </div>

      {/* Gender */}
      <div style={styles.form_group}>
        <label style={styles.label}>Gender</label>
        <select
          style={styles.input}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Prefer not to say</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" style={{ ...styles.btn, marginTop: "20px" }}>
        Save Changes
      </button>
    </form>
  );
}

const styles = {
  main_container: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    maxWidth: "650px",
    margin: "20px auto",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "12px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  profile_header: {
    display: "flex",
    alignItems: "center",
    background: "#1e1e1e",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  profile_pic: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "url('https://via.placeholder.com/70') center/cover no-repeat",
    marginRight: "15px",
  },
  profile_info: { flex: 1 },
  username: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "16px",
  },
  name: {
    fontSize: "14px",
    color: "#aaa",
  },
  btn: {
    background: "#4b6ef5",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    flexShrink: 0,
  },
  form_group: { marginBottom: "20px" },
  label: { display: "flex", fontSize: "14px", marginBottom: "6px" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "#1e1e1e",
    color: "white",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "#1e1e1e",
    color: "white",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  note: { display: "block", marginTop: "6px", fontSize: "12px", color: "#aaa" },
  toggle: {
    width: "60px",
    height: "28px",
    background: "#333",
    borderRadius: "14px",
    position: "relative",
    cursor: "pointer",
  },
  toggle_circle: {
    width: "24px",
    height: "24px",
    background: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",
    transition: "0.3s",
  },
};

export default EditProfile;
