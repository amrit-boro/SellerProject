import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbarlist from "./Navbarlist";
import { updateSearchName } from "./searchSlice";
import { BsPersonCircle } from "react-icons/bs";
import LogInLink from "./authentication/LogInLink";
import "react-loading-skeleton/dist/skeleton.css";
import { navlist } from "./ui/navlist";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto,
} from "./user/userSlice";

function NavBar() {
  const [hover, setHover] = useState(false);

  const searchname = useSelector((state) => state.search.searchName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SellerName = useSelector((state) => state.seller.sellerName);
  const SellerAbout = useSelector((state) => state.seller.sellerAbout);
  const SellerProfilePic = useSelector(
    (state) => state.seller.sellerProfilePic
  );

  // function handleSearch(e) {
  //   if (e.key == "Enter" && searchname.trim()) {
  //     // Navigate to new URL with search query
  //     dispatch(updateSearchName(searchname));
  //     navigate(`/search?name=${searchname}`);
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(token);

    if (!token || !userId) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/v1/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        console.log("re-fetched data: ", data);
        const user = data.data.user;

        dispatch(updateUserName(user.name));
        dispatch(updateUserEmail(user.email));
        dispatch(updateUserPhoto(user.photo));
      } catch (err) {
        console.error("Error fetching user on app load:", err);
      }
    };

    fetchUser();
  }, [dispatch]);

  const isAuthenticate = localStorage.getItem("sellerToken");

  const handleClick = () => {
    const token = localStorage.getItem("sellerToken");

    if (token) {
      // You can add any values you want to pass via state
      navigate("/sellerprofile", {
        state: { SellerName, SellerAbout, SellerProfilePic },
      });
    } else {
      navigate("/profile");
    }
  };

  const username = useSelector((state) => state.user.username);
  const userphoto = useSelector((state) => state.user.userPhoto);

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="header-buttons">
          {/* Seller */}
          <div className="seller-btn" onClick={handleClick}>
            {isAuthenticate ? "Seller" : "Become a Seller"}
          </div>

          {/* Login / User Dropdown */}
          <div className="userlogin-container">
            <Link className="login-link" to={"/login"}>
              {username ? `${username} ▼` : "Login / SignUp"}
            </Link>

            <div className="dropdown">
              {username ? (
                <>
                  <Link className="dropdown-item" to={"/accountPage"}>
                    Profile
                  </Link>
                  <div className="dropdown-item">Settings</div>
                  <div className="dropdown-item">Logout</div>
                </>
              ) : (
                <>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <Link to="/signup" className="dropdown-item">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Profile Image */}
          <div className="profile-img-wrapper">
            <img
              src={`http://localhost:3002/${userphoto}`}
              alt="Seller"
              className="profile-img"
            />
          </div>
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>
        {navlist.map((item) => (
          <Navbarlist item={item} key={item.length} />
        ))}
      </nav>
    </>
  );
}

export default NavBar;
