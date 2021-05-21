import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );

    return () => unsubscriber();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
