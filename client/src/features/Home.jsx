import { useItems } from "../hooks/useItems";
import HomeItem from "./HomeItem";
import ItemSkeleton from "./ui/ItemSkeleton";
import { useProducts } from "./user/useProduct";
import PageHelmet from "./ui/PageHelmet";

function Home() {
  // const { data, isLoading } = useItems();
  const { data, isLoading, isError } = useProducts(); // coming from the real database... use this every where to access the value....
  const products = data?.data?.products || [];
  console.log("Products: ", products);

  return (
    <>
      <PageHelmet title={"Home"} />
      <main className="product-grid">
        {isLoading ? (
          <ItemSkeleton card={9} />
        ) : (
          products.map((item) => <HomeItem item={item} key={item._id} />)
        )}
      </main>
    </>
  );
}

export default Home;
