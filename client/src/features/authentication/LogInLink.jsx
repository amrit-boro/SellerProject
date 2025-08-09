import { Link } from "react-router-dom";

function LogInLink({ username }) {
  return (
    <Link
      style={{ textDecoration: "None", color: "white", paddingTop: "11px" }}
      to={"/login"}
    >
      {username ? ` ${username}` : "Login / SignUp"}
    </Link>
  );
}

export default LogInLink;
