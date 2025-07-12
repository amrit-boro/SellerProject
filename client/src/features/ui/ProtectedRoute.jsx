import { useUser } from "../authentication/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();
  // 2. While loading, show a spinner..
  if (isLoading) return <Spinner />;

  // 3. If there is no authenticated user,  redirect to the login page

  // 4. If there is user, render the app

  return children;
}

export default ProtectedRoute;
