import myAxios from "@/utils/axios";
import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import * as Yup from "yup";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formUserData, setFormUserData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    currency_type: "",
    balance: 0,
  });

  const changeLoginUserData = (key, value) => {
    setFormUserData({ ...formUserData, [key]: value });
    // console.log("VAL", value);
    // console.log("VAL", key);
  };

  const login = async () => {
    console.log("Email", formUserData.email);
    console.log("Password", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      alert("Email эсвэл Password хоосон байна. Та бөглөнө үү!");
      return;
    }
    if (!formUserData.email.includes("@")) {
      alert("Таний оруулсан имэйл буруу байна! ");
    }
    if (formUserData.password !== formUserData.password) {
      alert("Your password wrong");
    }

    try {
      setLoading(true);

      const { data } = await myAxios.post("/login", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      console.log("dataUSER", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("Error", error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  // const logOut = () => {
  //   setUser(null);
  // };
  //signup_________________=>
  const signup = async () => {
    console.log("Name", formUserData.name);
    console.log("Email", formUserData.email);
    console.log("Password", formUserData.password);
    if (
      !formUserData.name ||
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.rePassword
    ) {
      alert("Талбарууд хоосон байж болохгүй!");
      return;
    }
    if (!formUserData.email.includes("@")) {
      alert("Таний оруулсан имэйл буруу байна! ");
    }
    if (formUserData.password !== formUserData.rePassword) {
      alert("Таний Password-ууд зөрүүтэй байна");
      return;
    }
    try {
      setLoading(true);
      const { data } = await myAxios.post("/signup", {
        email: formUserData.email,
        password: formUserData.password,
        name: formUserData.name,
      });
      console.log("UserSignUPData=>", data.user);
      setUser(data.user);

      router.push("/Steps");
    } catch (error) {
      console.log("Error", error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };
  //signup_________________=>

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        formUserData,
        changeLoginUserData,
        login,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
