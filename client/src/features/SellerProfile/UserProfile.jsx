import { useState } from "react";
import Profile from "./Profile";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfileCreate from "./ProfileCreate";
import BecomeSellerLanding from "./BecomeSellerLanding";
import LogInLink from "../authentication/LogInLink";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchName } from "../searchSlice";

function UserProfile() {
  const [showForm, setShowForm] = useState(false);

  const username = useSelector((state) => state.user.username);
  const searchname = useSelector((state) => state.search.searchName);
  console.log(searchname);
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch(updateSearchName(e.target.value));
  }

  return (
    <>
      <header className="top-bar2">
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <div className="header-buttons">
          {/* Seller */}

          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "3px" }}>
              <BsPersonCircle size={25} color="#555" />
            </div>
            <LogInLink username={username} />
          </div>

          <button className="cart-btn-1">🛒 Cart</button>
        </div>
      </header>
      {showForm ? (
        <ProfileCreate />
      ) : (
        <BecomeSellerLanding onCreateProfile={() => setShowForm(true)} />
      )}
    </>
  );
}

export default UserProfile;
