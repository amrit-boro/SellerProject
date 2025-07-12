import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "./searchSlice";

function HomeItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("actual data coming from the databbase: ", data);

  const { name: itemName, price, description, createdAt, images, _id } = item;

  function handleClick() {
    dispatch(updateSearchName(itemName));

    navigate(`/${_id}`, {
      state: { itemName, images, description, createdAt, _id },
    });
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={images} alt={itemName} />
      <h3>{itemName}</h3>
      <p className="rating">{"⭐".repeat(4)}</p>
      <p className="price">${price}</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default HomeItem;
