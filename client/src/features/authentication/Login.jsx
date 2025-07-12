import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";
import { Link } from "react-router-dom";
import { Uselogin } from "../user/useLogin";
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

  const [fullName, SetfullName] = useState("amrit");
  const [email, setEmail] = useState("amrit@example.com");
  const [password, setPassword] = useState("amrit196");
  const dispatch = useDispatch();

  const { login, isLoading } = Uselogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName) return null;
    dispatch(updateName(fullName));

    if (!email || !password) return;
    if (isLoading) console.log("Loading...");
    login({ email, password });
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
          {/* <div className="form-group">
          <label>Name</label>
          <input
          value={fullName}
          onChange={(e) => SetfullName(e.target.value)}
          type="name"
          placeholder="Enter your name"
          required
          />
          </div> */}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
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
              disabled={isLoading}
              required
            />
          </div>

          <button type="submit" disabled={isLoading} className="login-button">
            {!isLoading ? "login" : <Spinner />}
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
