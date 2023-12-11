import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tryLoginUser, setTryLoginUser] = useState({
    email: "",
    password: "",
  });

  const changeLoginUserData = () => {
    setTryLoginUser({ ...tryLoginUser, email });
  };
  const login = () => {};

  const signup = () => {};

  return (
    <UserContext.Provider value={{ user, tryLoginUser, login, signup }}>
      {" "}
      {children}
    </UserContext.Provider>
  );
};
