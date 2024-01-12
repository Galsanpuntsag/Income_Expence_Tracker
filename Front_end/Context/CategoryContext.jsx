import myAxios from "@/utils/axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  console.log("USERR", user);
  const [category, setCategory] = useState([]);
  const [showIcon, setShowIcon] = useState(<FaHome size={30} />);
  const [inputValue, setInputValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [categoryData, setCategoryData] = useState({
    iconname: "",
    description: "",
    category_img: "",
    category_color: "",
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

  const [selectedCategories, setSelectedCategories] = useState([]);

  const onSelectCategory = (name) => {
    if (selectedCategories.includes(name)) {
      const newCat = selectedCategories.filter((s) => s !== name);
      setSelectedCategories(newCat);
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const createCategory = async () => {
    try {
      const { data } = await myAxios.post("/categories", {
        ...categoryData,
        user_id: user.id,
      });
      setRefresh(!refresh);
      toast.success("Record succesfully added");
      console.log("CreatecategoryData", data);
    } catch (error) {
      console.log(`ERRaddCtgry ${error}`);
      // toast.error(`add Record failed because of ${error}`);
    }
  };

  const getAllCategories = async () => {
    try {
      const {
        data: { categories },
      } = await myAxios.get("/categories/" + user.id);
      console.log("CAetegory", categories);
      setCategory(categories);
    } catch (error) {
      console.log("RRer", error);
      // toast.error(`get all Record failed because of ${error}`);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [refresh]);

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
        getAllCategories,

        selectedCategories,
        onSelectCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
