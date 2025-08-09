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

  const sellerToken = localStorage.getItem("sellerToken");
  console.log("token coming from the storage:", sellerToken);

  return (
    <>
      <header className="top-bar2">
        {/* <div className="logo2">ShopeZone</div> */}
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>

        <span style={{ marginRight: "25px" }}>Hello, {username}</span>
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
