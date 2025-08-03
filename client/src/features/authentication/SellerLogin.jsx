import { Link, useNavigate } from "react-router-dom";
import LogInLink from "./LogInLink";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import ProfileCreate from "../SellerProfile/ProfileCreate";
import { useSellerlogin } from "../user/useLogin";
import Spinner from "../ui/Spinner";
import { useDispatch } from "react-redux";
import {
  updateSellerAbout,
  updateSellerName,
  updateSellerProfilePic,
} from "../SellerProfile/sellerSlice";

function SellerLogin() {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();
  const sellerloginMutation = useSellerlogin();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("bikash@example.com");
  const [password, setPassword] = useState("@mrit196");

  const handleSubmit = (e) => {
    e.preventDefault();

    sellerloginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const token = data.token;
          localStorage.setItem("sellerToken", token);
          alert("login Successful");
          console.log(data.token);
          const SellerName = data.data.user.sellerName;
          const SellerAbout = data.data.user.sellerAbout;
          const SellerProfilePic = data.data.user.SellerProfilePic;
          console.log(SellerName, SellerAbout, SellerProfilePic);
          dispatch(updateSellerName(SellerName));
          dispatch(updateSellerAbout(SellerAbout));
          dispatch(updateSellerProfilePic(SellerProfilePic));
          navigate("/sellerprofile", {
            state: { SellerName, SellerAbout, SellerProfilePic },
          }); // ✅ pass via state
        },
        onError: (error) => {
          console.log(error.message);
          alert(error.message);
        },
      }
    );
  };

  return (
    <>
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

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>

      <div className="login-container">
        <h2>ShopZone</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={sellerloginMutation.isPending}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={sellerloginMutation.isPending}
              required
            />
          </div>

          <button
            type="submit"
            disabled={sellerloginMutation.isPending}
            className="login-button"
          >
            {!sellerloginMutation.isPending ? "login" : <Spinner />}
          </button>
        </form>

        <div className="footer-text">
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
      </div>
    </>
  );
}

// const containerStyle = {
//   display: "flex",
//   fontFamily: "sans-serif",
//   height: "100vh",
//   margin: "5px",
//   backgroundColor: "#f1f3f6",
// };

// const leftPanelStyle = {
//   width: "35%",
//   backgroundColor: "#2874f0",
//   color: "white",
//   padding: "40px 20px",
//   marginLeft: "10%",
// };

// const rightPanelStyle = {
//   width: "40%",
//   backgroundColor: "white",
//   padding: "60px 40px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// };

// const inputStyle = {
//   padding: "10px",
//   border: "none",
//   borderBottom: "2px solid #2874f0",
//   fontSize: "16px",
//   marginBottom: "30px",
//   outline: "none",
// };

// const infoTextStyle = {
//   fontSize: "13px",
//   marginBottom: "30px",
// };

// const linkStyle = {
//   color: "#2874f0",
//   textDecoration: "underline",
//   cursor: "pointer",
// };

// const buttonStyle = {
//   backgroundColor: "#fb641b",
//   color: "white",
//   padding: "12px",
//   fontSize: "16px",
//   border: "none",
//   cursor: "pointer",
//   fontWeight: "bold",
//   boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
// };

// const footerStyle = {
//   marginTop: "30px",
//   textAlign: "center",
// };

// const imageStyle = {
//   width: "100px",
//   marginTop: "40px",
// };

export default SellerLogin;
