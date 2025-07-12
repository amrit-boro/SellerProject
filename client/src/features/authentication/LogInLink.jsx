import { Link } from "react-router-dom";
import User from "../SellerProfile/User";

function LogInLink({ username }) {
  return (
    <Link className="login-button-1" to={"/login"}>
      {username ? <User username={username} /> : "Login / SignUp"}
    </Link>
  );
}

export default LogInLink;
