import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbarlist from "./Navbarlist";
import { updateSearchName } from "./searchSlice";
import { BsPersonCircle } from "react-icons/bs";
import LogInLink from "./authentication/LogInLink";
import "react-loading-skeleton/dist/skeleton.css";
import { navlist } from "./ui/navlist";
import { useLoggedInUser } from "./user/useProduct";
import { useEffect } from "react";
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto,
} from "./user/userSlice";

function NavBar() {
  const searchname = useSelector((state) => state.search.searchName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SellerName = useSelector((state) => state.seller.sellerName);
  const SellerAbout = useSelector((state) => state.seller.sellerAbout);
  const SellerProfilePic = useSelector(
    (state) => state.seller.sellerProfilePic
  );

  function handleSearch(e) {
    if (e.key == "Enter" && searchname.trim()) {
      // Navigate to new URL with search query
      dispatch(updateSearchName(searchname));
      navigate(`/search?name=${searchname}`);
    }
  }

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
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="search-container">
          <input
            type="text"
            value={searchname}
            onChange={(e) => dispatch(updateSearchName(e.target.value))}
            onKeyDown={handleSearch}
            placeholder="Search for products..."
          />
          <button className="search-button">🔍</button>
        </div>

        <div className="header-buttons">
          {/* Seller */}

          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            Become a Seller
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "3px" }}>
              <img src={userphoto} alt="Seller" style={styles.profileImg} />
            </div>
            <LogInLink username={username} />
          </div>

          <button className="cart-btn-1">🛒 Cart</button>
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

const styles = {
  profileImg: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "15px",
  },
};

export default NavBar;
