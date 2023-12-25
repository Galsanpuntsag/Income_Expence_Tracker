import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

import { UserContext } from "./UserProvider";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [createCtgr, setCreateCtgr] = useState({
    name: "",
    description: "",
    category_img: "",
    category_color: "",
  });
  const { user } = useContext(UserContext);
  const createCategory = async () => {
    try {
      const { data } = await axios.post("http://localhost:8008/categories", {
        ...createCtgr,
        user_id: user.id,
      });
      setRefresh(!refresh);
      toast.success("Record succesfully added");
    } catch (error) {
      console.log("ERRaddCtgry", error);
      toast.error("Record failed");
    }
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    console.log("FINDcategories", categories);
    setCategory(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        getCategories,
        category,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
