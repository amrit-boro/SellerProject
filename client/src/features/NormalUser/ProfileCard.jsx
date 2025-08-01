import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ item }) => {
  console.log("item: ", item);
  const {
    name: itemName,
    images,
    _id,
    seller: sellerProfile,
    description,
    price,
    createdAt,
  } = item;
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);

  const navigate = useNavigate();

  function handleToggle() {
    // setShowBig((prev) => !prev);
    navigate(`/${_id}`, {
      state: {
        itemName,
        images,
        sellerProfile,
        price,
        description,
        createdAt,
        _id,
      },
    });
  }

  function handleBorrow() {
    if (!isAuthenticate) {
      navigate("/login");
    } else {
      navigate(`/borrow/${_id}`, {
        state: {
          images,
          itemName,
          sellerProfilePic,
          sellerName,
          sellerPhone,
          sellerEmail,
          sellerProfile,
          price,
          _id,
        },
      });
    }
  }

  const sellerName = sellerProfile.sellerName;
  const sellerProfilePic = sellerProfile.SellerProfilePic;
  const sellerEmail = sellerProfile.sellerEmail;
  const sellerPhone = sellerProfile.sellerPhone;

  return (
    // Inside ProfileCard Component
    <>
      <div className="profile-card2">
        {/* Image */}
        <img src={images} alt="Product" className="profile-img2" />

        {/* Info */}
        <div className="profile-info2">
          <div>
            <div className="item-title">{itemName}</div>

            <div className="profile-name2">
              <BsPersonCircle size={14} />
              <span className="seller-id">{sellerName.slice(0, 16)}</span>
            </div>

            <div className="profile-items2">
              Description: {description.slice(0, 100)}
            </div>

            <div className="created-at">
              {new Date(createdAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>

            <div className="price">
              Rs: <span>{price}</span>
            </div>
          </div>

          <div className="profile-buttons">
            <button className="colorbrw" onClick={handleToggle}>
              More
            </button>
            <button className="borrow" onClick={handleBorrow}>
              Borrow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
