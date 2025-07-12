import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isloading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user),
        toast.success("Accout successfully created, please login to continue");
    },
  });

  return { signup, isloading };
}
