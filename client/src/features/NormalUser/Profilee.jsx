import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "../Item/ItemDettails";
import Navbarlist from "../Navbarlist";
import { updateSearchName } from "../searchSlice";
import { navlist } from "../ui/navlist";
import PageHelmet from "../ui/PageHelmet";

function Profilee() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchName = useSelector((state) => state.search.searchName);
  // const { data: items, isLoading } = useItems();

  const username = useSelector((state) => state.user.username);
  const x = location.state;
  console.log(x);
  const { images, price, description, sellerProfile, Location, _id } =
    location.state;

  return (
    <>
      {/* <PageHelmet title={itemName} /> */}
      <header className="top-bar2">
        <Link
          className="logo2"
          to={"/"}
          onClick={() => dispatch(updateSearchName(""))}
        >
          ShopeZone
        </Link>
        <div className="search-container">
          <input
            type="text"
            value={searchName}
            onChange={(e) => dispatch(updateSearchName(e.target.value))}
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="account2">
          Hello,{username}
          <br />
        </div>
      </header>

      <nav className="nav-bar2">
        <button className="nav-all2">= All</button>

        {navlist.map((item) => (
          <Navbarlist item={item} key={item.length} />
        ))}
      </nav>

      {/* Add */}
      {/* <AdBarr itemName={itemName} discount={10} /> */}

      <ItemDetails
        images={images}
        description={description}
        Location={Location}
        price={price}
        sellerProfile={sellerProfile}
        _id={_id}
        username={username}
      />
    </>
  );
}

export default Profilee;
