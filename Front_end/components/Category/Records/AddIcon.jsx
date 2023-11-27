import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBaseballBall } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FaPencilAlt } from "react-icons/fa";
const AddIcon = () => {
  const Icons = [
    {
      icon: <FaHome />,
    },
    { icon: <FaBaseballBall /> },
    { icon: <FaCarAlt /> },
    { icon: <FaBagShopping /> },
    { icon: <FaCarAlt /> },
    { icon: <GrGallery /> },
    { icon: <FaPencilAlt /> },
    { icon: <FaCarAlt /> },
    { icon: <FaCarAlt /> },
    { icon: <FaCarAlt /> },
  ];
  return <div>AddIcon</div>;
};

export default AddIcon;
