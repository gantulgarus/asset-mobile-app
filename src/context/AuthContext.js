import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { mainUrl } from "../../Constants";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [danuser, setDanuser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const login = (email, password) => {
    setLoading(true); // Set loading to true when login starts
    setIsLoggedIn(true);

    // axios
    //   .post("http://localhost:8000/api/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((result) => {
    //     console.log("Login to rest api success");
    //     loginUserSuccessful(result.data.access_token, result.data.user);
    //     setIsLoggedIn(true);
    //   })
    //   .catch((err) => {
    //     setIsLoggedIn(false);
    //     setError(err);
    //     console.error("Failed to login:", err);
    //   })
    //   .finally(() => {
    //     setLoading(false); // Set loading to false when login completes
    //   });
  };

  const loginUserSuccessful = async (token, user) => {
    setToken(token);
    setUser(user);
    try {
      await AsyncStorage.setItem("userData", JSON.stringify({ token, user }));
    } catch (error) {
      console.error("Утасруу дата хадгалж чадсангүй...", error);
    }
  };

  const logout = async () => {
    // await AsyncStorage.removeItem("userData");
    setIsLoggedIn(false);
    // setToken(null);
    // setUser(null);
    // setDanuser(null);
    console.log("User logout...");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user,
        token,
        error,
        loading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
