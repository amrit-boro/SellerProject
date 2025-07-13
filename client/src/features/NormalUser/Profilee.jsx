import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "../Item/ItemDettails";
import Navbarlist from "../Navbarlist";
import { updateSearchName } from "../searchSlice";
import { navlist } from "../ui/navlist";

function Profilee() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchName = useSelector((state) => state.search.searchName);
  // const { data: items, isLoading } = useItems();

  const username = useSelector((state) => state.user.username);
  const x = location.state;
  console.log("values: ", x);
  const { itemName, images, sellerName, description, Location, _id } =
    location.state;

  return (
    <>
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
        SellerName={sellerName?.sellerName} // Access the nested string field
        SellerAbout={sellerName?.sellerAbout} // if you need more info
        description={description}
        Location={Location}
        itemName={itemName}
        _id={_id}
        username={username}
      />
    </>
  );
}

export default Profilee;
