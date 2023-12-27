import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [categoryData, setCategoryData] = useState({
    icon_name: "",
    description: "",
    category_img: "",
    category_color: "",
  });

  const handleIcon = ({ icon }) => {
    setCategoryData({ ...categoryData, category_img: icon });
  };

  const handleColor = ({ color }) => {
    setCategoryData({ ...categoryData, category_color: color });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCategoryData({ ...categoryData, [e.taget.name]: e.target.value });
  };

  const createCategory = async () => {
    try {
      const { data } = await axios.post("http://localhost:8008/categories");
      setRefresh(!refresh);
      toast.success("Record succesfully added");
      console.log("categoryDTirle", data);
    } catch (error) {
      console.log("ERRaddCtgry", error);
      toast.error("add Record failed");
    }
  };

  const getAllCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    console.log("FINDcategories", categories);
    setCategory(categories);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

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
        categoryData,
        setCategoryData,
        category,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
