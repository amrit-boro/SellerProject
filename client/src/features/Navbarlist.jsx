import { useDispatch } from "react-redux";
import { updateSearchName } from "./searchSlice";
import { useNavigate } from "react-router-dom";

function Navbarlist({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleToggle() {
    dispatch(updateSearchName(item));
    navigate(`/search?name=${item}`);
  }

  return (
    <>
      <div className="nav-items2" onClick={handleToggle}>
        {item}
      </div>
    </>
  );
}

export default Navbarlist;
