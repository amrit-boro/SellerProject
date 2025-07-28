// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllfilteredProducts,
  fetchAllsellerProducts,
  fetchProduct,
  fetchSeller,
} from "./product";
import { fetchSearchProducts } from "./product";

// must use before

// export function useProducts() {
//   return useQuery({
//     queryKey: ["product"],
//     queryFn: fetchProduct,
//   });
// }

export function useProducts({ distance, filteritemName, lat, lng, unit } = {}) {
  // console.log("valuesssss: ", distance, filteritemName, lat, lng, unit);
  return useQuery({
    queryKey: ["products", distance, filteritemName, lat, lng, unit],
    queryFn: () => fetchProduct({ distance, filteritemName, lat, lng, unit }),
  });
}

export function useGetAllfilterProducts(
  distance,
  filteritemName,
  lat,
  lng,
  unit
) {
  return useQuery({
    queryKey: ["filterProduct"],
    queryFn: () =>
      fetchAllfilteredProducts(distance, filteritemName, lat, lng, unit),
  });
}

export function useSeeProducts(itemName, min, max) {
  console.log(min, max);
  return useQuery({
    queryKey: ["seeProduct", itemName, min, max],
    queryFn: () => fetchSearchProducts(itemName, min, max),
  });
}

export function useGetAllsellerProducts(id) {
  return useQuery({
    queryKey: ["getAllsellerProduct", id],
    queryFn: () => fetchAllsellerProducts(id),
  });
}

// for a single item id see the product and seller details
export function useSeller(id) {
  return useQuery({
    queryKey: ["getSingleProduct", id],
    queryFn: () => fetchSeller(id),
  });
}
