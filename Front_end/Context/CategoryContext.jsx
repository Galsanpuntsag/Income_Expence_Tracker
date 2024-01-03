import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
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
      const { data } = await axios.post("http://localhost:8008/categories", {
        ...categoryData,
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
    } = await axios.get("http://localhost:8008/categories");
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
