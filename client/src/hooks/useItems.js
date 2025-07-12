import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/apiItems";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
};
