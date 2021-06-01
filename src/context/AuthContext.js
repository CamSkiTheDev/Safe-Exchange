import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../App";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [logs, setLogs] = useState([]);

  const signup = async (email, password, name) => {
    await auth.createUserWithEmailAndPassword(email, password);

    let response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: auth.currentUser.uid,
        name,
        email,
      }),
    });

    if (response.status !== 200) return;

    response = await response.json();

    setCurrentUser({ ...auth.currentUser });
    setLogs([...response.log]);
    history.push("/logs");
  };

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);

    let response = await fetch(`${API_URL}/users/${auth.currentUser.uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) return;

    response = await response.json();

    setCurrentUser({ ...auth.currentUser, ...response });
    setLogs([...response.log]);
    history.push("/logs");
  };

  const logout = async () => {
    await auth.signOut();
    setLogs([]);
    history.push("/");
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) =>
      user ? setCurrentUser({ ...user, ...logs }) : setCurrentUser(user)
    );

    return () => unsubscriber();
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, logs, setLogs }}
    >
      {children}
    </AuthContext.Provider>
  );
};
