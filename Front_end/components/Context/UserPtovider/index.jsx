import React, { createContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();
console.log(axios.isCancel("something"));

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loginUserData, setLoginUserData] = useState({
    email: "galsaa20@gmail.com",
    password: "",
  });

  const changeLoginUserData = (key, value) => {
    setLoginUserData({ ...loginUserData, [key]: value });
    // console.log("VAL", value);
    // console.log("VAL", key);
  };

  const login = async () => {
    console.log("Email", loginUserData.email);
    console.log("Password", loginUserData.password);
    if (!loginUserData.email || !loginUserData.password) {
      alert("Email эсвэл Password заавал бөглөх ёстой");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/login", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("Error", error);
      if (error.res && error.res.data && error.res.data.message) {
        toast.error(`${error.res.data.message}`, { autoClose: 3000 });
      } else {
        console.error("Unexpected error format:", error);
      }
    }
  };

  const logOut = () => {
    setUser(null);
  };

  const signup = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        loginUserData,
        changeLoginUserData,
        login,
        logOut,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
