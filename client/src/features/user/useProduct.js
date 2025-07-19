// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchAllsellerProducts, fetchProduct, fetchSeller } from "./product";
import { fetchSearchProducts } from "./product";

// must use before

export function useProducts() {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
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
