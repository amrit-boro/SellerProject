import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
//
// export function Uselogin() {
//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       // console.log("user: ", user);
//       navigate(-1);
//     },
//     onError: (err) => {
//       // console.log("ERROR: ", err);
//       toast.error("Provided email or password are incorrect");
//     },
//   });

//   return { login, isLoading };
// }

const loginUser = async ({ email, password }) => {
  const res = await fetch("http://localhost:3002/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login Failed");
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

const loginSeller = async ({ email, password }) => {
  const res = await fetch("http://localhost:3002/api/v1/seller/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login Failed");

  return data;
};

export const useSellerlogin = () => {
  return useMutation({
    mutationFn: loginSeller,
  });
};
