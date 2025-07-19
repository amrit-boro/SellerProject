import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchName } from "../searchSlice";
import { useProducts, useSeller } from "../user/useProduct";

function GetAllProducts({ product, all_products }) {
  // console.log("sellerId: ", product.seller);
  const data = useSeller(product.seller);
  const sellerProfile = data?.data?.data?.seller;
  console.log("seller: ", sellerProfile);
  const { name: itemName, price, _id, images, description } = product;
  const navigate = useNavigate();
  function handleClick(_id) {
    navigate(`/${_id}`, {
      state: {
        itemName,
        images,
        description,
        sellerProfile,
        _id,
        price,
      },
    });
  }

  return (
    <div className="visit-product-card" key={product._id}>
      <img src={images} alt={itemName} />
      <h4>{itemName}</h4>
      <p className="price">{price}</p>
      <button onClick={() => handleClick(_id)}>View Product</button>
    </div>
  );
}

export default GetAllProducts;
