import { useContext } from "react";
import { AuthContextCoffee } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContextCoffee);
  return auth;
};

export default useAuth;
