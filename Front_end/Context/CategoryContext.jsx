import myAxios from "@/utils/axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  console.log("Uss", user);
  const [category, setCategory] = useState([]);
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [displayCate, setDisplayCate] = useState(<FaHome size={30} />);
  const [displayColor, setDisplayColor] = useState("bg-red-500");
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [categoryData, setCategoryData] = useState({
    iconname: "",
    description: "",
    category_img: "",
    category_color: displayColor,
  });

  const handleIcon = (icon) => {
    setCategoryData({ ...categoryData, category_img: icon });
  };

  const handleColor = (color) => {
    setCategoryData({ ...categoryData, category_color: color });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const createCategory = async () => {
    try {
      const { data } = await myAxios.post("/categories", {
        ...categoryData,
        user_id: user.id,
      });
      setRefresh(!refresh);
      toast.success("Record succesfully added");
      console.log("categoryData", data);
    } catch (error) {
      console.log(`ERRaddCtgry ${error}`);
      toast.error(`add Record failed because of ${error}`);
    }
  };

  const getAllCategories = async () => {
    const {
      data: { categories },
    } = await myAxios.get("/categories/" + user.id);
    console.log("FINDcategories", categories);
    setCategory(categories);
  };

  return (
    <CategoryContext.Provider
      value={{
        createCategory,
        handleIcon,
        handleColor,
        inputValue,
        setInputValue,
        handleChange,
        showIcon,
        setShowIcon,
        displayCate,
        setDisplayCate,
        categoryData,
        setCategoryData,
        category,
        getAllCategories,
        setDisplayColor,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
