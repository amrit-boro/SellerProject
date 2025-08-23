import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";

function Borrow() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // lOCATION...................................................................................
  const x = location.state;
  console.log(x);
  const {
    description,
    images,
    itemName,
    sellerProfilePic,
    sellerName,
    sellerPhone,
    sellerEmail,
    username,
    price,
    _id,
  } = location.state;

  // const sellerProfilePic = sellerProfile.SellerProfilePic;
  // const sellerName = sellerProfile.sellerName;
  // const sellerLocation = sellerProfile.sellerLocation;
  // const sellerPhone = sellerProfile.sellerPhone;
  // const sellerEmail = sellerProfile.sellerEmail;

  const onSubmit = (data) => {
    console.log(data);
    console.log("Item id: ", id);
    navigate("/");
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

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <header className="top-bar2" style={styles.header}>
        <Link className="logo2" to={"/"} style={styles.logo}>
          ShopeZone
        </Link>

        <div className="account2"> {username}</div>
      </header>

      <form style={styles.flexWrapper} onSubmit={handleSubmit(onSubmit)}>
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
            style={{
              marginTop: "3px",
              fontSize: "20px",
              display: "flex",
              flexDirection: "column",
              padding: "12px",
              borderLeft: "5px solid #ffcc00",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // soft shadow/ 👈 shorthand for width + style + color
            }}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#444", // softer than black
                lineHeight: "1.5", // improves readability
                textAlign: "center",
              }}
            >
              {description}
            </span>
            <span
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
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
                alt="seller"
              />
              <h3 style={styles.nameheading}>{sellerName}</h3>
            </div>
          </div>
          <label style={styles.label}>
            Full Name
            <input
              style={styles.input}
              type="text"
              {...register("fullname", { required: "This field is required" })}
            />
          </label>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              type="email"
              {...register("email", { required: "email is required" })}
            />
          </label>
          <label style={styles.label}>
            Phone Number
            <input
              style={styles.input}
              type="tel"
              {...register("tel", { required: "Phone no is required" })}
            />
          </label>
          <div style={{ display: "flex", gap: "20px" }}>
            <label style={styles.label}>
              Borrow Date:
              <input
                style={styles.input}
                type="date"
                defaultValue={today}
                {...register("Currentdate", { required: "Date is required" })}
              />
            </label>
            <label style={styles.label}>
              Return Date:
              <input
                type="date"
                style={styles.input}
                {...register("retunDate", { required: "Returd date required" })}
              />
            </label>
          </div>
          <label style={styles.label}>
            Purpose of Borrowing
            <textarea
              style={{ ...styles.input, resize: "vertical", height: "60px" }}
              name="purpose"
              rows="3"
              {...register("purpose", { required: "Purpose is required" })}
              placeholder="Describe purpose"
            />
          </label>
          <div style={styles.checkboxContainer}>
            <input type="checkbox" {...register("agree")} />
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
    backgroundColor: "#e3e2e2",
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
