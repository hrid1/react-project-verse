import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user registration
  const createUser = (email, passoword) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passoword);
  };
  // login user
  const loginUser = (email, passoword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passoword);
  };

  //   logout user

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // useEffect( () => {
  //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
  //         console.log('Got userr', currentUser);
  //     })

  //     return () => {
  //         unSubscribe()
  //     }
  // } , [])

  const authInfo = {
    user,
    createUser,
    loginUser,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
