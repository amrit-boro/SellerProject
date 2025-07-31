import { useItems } from "../hooks/useItems";
import HomeItem from "./HomeItem";
import ItemSkeleton from "./ui/ItemSkeleton";
import { useProducts } from "./user/useProduct";
import PageHelmet from "./ui/PageHelmet";
import HomeFiler from "../features/user/HomeFiler";
import UserLocation from "../features/ui/UserLocation";
import { useSelector } from "react-redux";

function Home() {
  // const { data, isLoading } = useItems();
  const { distance, filteritemName, unit } = useSelector(
    (state) => state.filter
  );

  // console.log("Filters:", distance);
  const lat = 26.212;
  const lng = 91.684;

  // const { data, isLoading, isError } = useProducts(); // dis, product_name, lat,lng,
  const { data, isLoading, isError } = useProducts({
    distance,
    filteritemName,
    lat,
    lng,
    unit,
  });
  const products = data?.data?.products || [];

  return (
    <>
      <PageHelmet title={"Home"} />
      <div style={{ display: "flex" }}>
        <HomeFiler />

        <main
          className="product-grid"
          style={{
            // <-- this makes it take full remaining width
            minHeight: "100vh",
          }}
        >
          {isLoading ? (
            <ItemSkeleton card={9} />
          ) : products.length === 0 ? (
            <p
              style={{
                justifyContent: "center",
                textAlign: "center",
                padding: "3rem",
              }}
            >
              Sorry No products found within the selected range.
            </p>
          ) : (
            products.map((item) => <HomeItem item={item} key={item._id} />)
          )}
        </main>
      </div>
    </>
  );
}

export default Home;
