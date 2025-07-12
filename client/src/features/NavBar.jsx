import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbarlist from "./Navbarlist";
import { updateSearchName } from "./searchSlice";
import { BsPersonCircle } from "react-icons/bs";
import LogInLink from "./authentication/LogInLink";
import "react-loading-skeleton/dist/skeleton.css";
import { navlist } from "./ui/navlist";

function NavBar() {
  const username = useSelector((state) => state.user.username);
  const searchname = useSelector((state) => state.search.searchName);
  // const { data: items, isLoading } = useItems();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const allproducts = allproductsRaw?.data?.products || [];

  // const dispatch = useDispatch();
  // State to hold the current value of the search input

  function handleSearch(e) {
    if (e.key == "Enter" && searchname.trim()) {
      // Navigate to new URL with search query
      dispatch(updateSearchName(searchname));
      navigate(`/search?name=${searchname}`);
    }
  }
  // dispatch(updateSearchName(e.target.value));

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
          <Link className="login-button-1" to={"/profile"}>
            Become a seller
          </Link>

          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "3px" }}>
              <BsPersonCircle size={25} color="#555" />
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

export default NavBar;
