import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
//
export function Uselogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("user: ", user);
      navigate(-1);
    },
    onError: (err) => {
      console.log("ERROR: ", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
