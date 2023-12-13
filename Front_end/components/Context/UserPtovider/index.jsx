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
    userEmail: `${user}`,
    userPassword: "",
  });

  const changeLoginUserData = (key, value) => {
    setLoginUserData({ ...loginUserData, [key]: value });
    // console.log("VAL", value);
    // console.log("VAL", key);
  };

  const login = async () => {
    console.log("Email", loginUserData.userEmail);
    console.log("Password", loginUserData.userPassword);
    if (!loginUserData.userEmail || !loginUserData.userPassword) {
      alert("Email эсвэл Password заавал бөглөх ёстой");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/login", {
        userEmail: loginUserData.userEmail,
        userPassword: loginUserData.userPassword,
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
  //signup_________________=>
  const [newUser, setNewUser] = useState(null);
  const [signupUserData, setSignupUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeSignupUserData = (key, value) => {
    setSignupUserData({ ...signupUserData, [key]: value });
    console.log("VAL", value);
    console.log("VAL", key);
  };

  const signup = async () => {
    console.log("Name", signupUserData.name);
    console.log("Email", signupUserData.email);
    console.log("Password", signupUserData.password);
    if (
      !signupUserData.name ||
      !signupUserData.email ||
      !signupUserData.password
    ) {
      alert("Name, Email эсвэл Password -уудыг заавал бөглөх ёстой");
      return;
    }
    try {
      const { signupData } = await axios.get(
        "http://localhost:8008/auth/signup",
        {
          name: signupUserData.name,
          email: signupUserData.email,
          password: signupUserData.password,
        }
      );
      console.log("USERDATAAA=>", signupData);
      setNewUser(signupData);
      router.push("/login");
    } catch (error) {
      console.log("Error", error);
      if (error.res && error.res.data && error.res.data.message) {
        toast.error(`${error.res.data.message}`, { autoClose: 3000 });
      } else {
        console.error("Unexpected error format:", error);
      }
    }
  };
  //signup_________________=>

  return (
    <UserContext.Provider
      value={{
        user,
        loginUserData,
        changeLoginUserData,
        login,
        logOut,
        signup,
        newUser,
        changeSignupUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
