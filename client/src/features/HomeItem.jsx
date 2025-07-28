import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "./searchSlice";
import { Helmet } from "react-helmet-async";

function HomeItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("actual data coming from the databbase: ", data);
  const {
    name: itemName,
    price,
    description,
    images,
    // seller,
    _id,
    seller: sellerProfile,
  } = item;

  // console.log(seller);

  function handleClick() {
    dispatch(updateSearchName(itemName));

    navigate(`/${_id}`, {
      state: { itemName, images, description, _id, price, sellerProfile },
    });
  }

  return (
    <>
      <div className="product-card" onClick={handleClick}>
        <img src={images} alt={itemName} />
        <h3>{itemName}</h3>
        {/* <h3>{seller}</h3> */}
        <p className="rating">{"⭐".repeat(4)}</p>
        <p className="price">${price}</p>
        <button className="add-btn">View </button>
      </div>
    </>
  );
}

export default HomeItem;
