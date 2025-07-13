import ProfileCard from "./ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateSearchName } from "../searchSlice";
import AdBarr from "../advertisement/AdBarr";
import LogInLink from "../authentication/LogInLink";
import Navbarlist from "../Navbarlist";
import CardSkeleton from "./CardSkeleton";
import { useSeeProducts } from "../user/useProduct";
import { navlist } from "../ui/navlist";
import { useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function NormalUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  const searchname = useSelector((state) => state.search.searchName);

  const query = useQuery();
  // const searchname = query.get("name") || "";
  const priceMin = query.get("price[gte]") || "";
  const priceMax = query.get("price[lte]") || "";

  const [range, setRange] = useState({
    min: priceMin,
    max: priceMax,
  });

  const {
    data: searchProductsRaw,
    isLoading,
    isError,
    error,
  } = useSeeProducts(searchname, range.min, range.max);

  const searchProducts = searchProductsRaw?.data?.products || [];

  const minOptions = ["100", "200", "350", "2000"];
  const maxOptions = ["1000", "1500", "3000", "5000"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (searchname) params.append("name", searchname);
    if (range.min) params.append("price[gte]", range.min);
    if (range.max) params.append("price[lte]", range.max);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <>
      <header className="top-bar2" key={priceMax}>
        <Link
          className="logo2"
          to={"/"}
          onClick={() => dispatch(updateSearchName(""))}
        >
          ShopZone
        </Link>

        <div className="search-container">
          {/* <input type="text" onChange={handleSearch} value={searchname} /> */}
          <input
            type="text"
            onChange={(e) => dispatch(updateSearchName(e.target.value))}
            value={searchname}
          />
          <button className="search-button">🔍</button>
        </div>

        <Link className="login-button-1" to={"/profile"}>
          Become a seller
        </Link>

        <LogInLink username={username} />
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>
        {navlist.map((item) => (
          <Navbarlist item={item} key={item.length} />
        ))}
      </nav>

      <AdBarr />

      <div className="main-layout">
        <aside className="sidebar_filter">
          <h3>Filter by Price</h3>

          <form onSubmit={handleSubmit} className="filter_container">
            <select
              name="min"
              value={range.min}
              onChange={handleChange}
              className="min"
            >
              <option value="">Min</option>
              {minOptions.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
            to
            <select name="max" value={range.max} onChange={handleChange}>
              <option value="">Max</option>
              {maxOptions.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
            <button type="submit" className="see">
              Submit
            </button>
          </form>
        </aside>

        <main className="grid-container2">
          {isLoading ? (
            <CardSkeleton card={9} key={9} />
          ) : isError ? (
            <p style={{ color: "red" }}>{error.message}</p>
          ) : searchProducts.length === 0 ? (
            <p>No products found for the selected filters.</p>
          ) : (
            searchProducts.map((item) => (
              <ProfileCard
                item={item}
                key={item._id}
                min={range.min}
                max={range.max}
              />
            ))
          )}
        </main>
      </div>
    </>
  );
}

export default NormalUser;
