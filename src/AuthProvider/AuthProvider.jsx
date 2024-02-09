import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContextCoffee = createContext(null);

const AuthProvider = ({ children }) => {
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const allAuthCoffee = { createUser };
  return (
    <AuthContextCoffee.Provider value={allAuthCoffee}>
      {children}
    </AuthContextCoffee.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
