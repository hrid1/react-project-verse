import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
//   const testUser = { name: "Hriody" };

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // setDisplay name
  const setDisplayName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //   state change user

  useEffect(() => {
    const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsribe();
    };
  }, []);

//   signout user
const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

  const authInfo = {
    createUser,
    loginUser,
    setDisplayName,
    user,
    logOutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
