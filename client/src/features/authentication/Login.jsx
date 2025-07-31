import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto,
} from "../user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../user/useLogin";
import Spinner from "../ui/Spinner";
import LogInLink from "./LogInLink";
import { BsPersonCircle } from "react-icons/bs";

function Login() {
  useEffect(() => {
    // Add class to body only for login
    document.body.classList.add("login-body");

    // Cleanup when unmounting
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("amrit@gmail.com");
  const [password, setPassword] = useState("amrit12345");
  const dispatch = useDispatch();
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(updateName(fullName));
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const token = data.token;
          const user = data.data.user;

          localStorage.setItem("token", token);
          localStorage.setItem("userId", user._id); // Save ID
          alert("Login Successful");
          console.log("data: ", data);
          console.log(data.data.user.name);
          dispatch(updateUserName(data.data.user.name));
          dispatch(updateUserPhoto(data.data.user.photo));
          dispatch(updateUserEmail(data.data.user.email));

          navigate("/"); // Optional
        },
        onError: (error) => {
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
              disabled={loginMutation.isPending}
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
              disabled={loginMutation.isPending}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="login-button"
          >
            {!loginMutation.isPending ? "login" : <Spinner />}
          </button>
        </form>

        <div className="footer-text">
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
