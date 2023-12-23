import {
  FaHome,
  FaGift,
  FaTaxi,
  FaWineGlassAlt,
  IoIosFitness,
} from "react-icons/fa";

export const getIcons = (iconName = "home", iconColor) => {
  const icons = {
    home: <FaHome size={30} color={iconColor} />,
    gift: <FaGift size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    wine: <FaWineGlassAlt size={30} color={iconColor} />,
    fitness: <IoIosFitness size={30} color={iconColor} />,
  };
  return icons[iconName];
};

export const getCurrencySymbol = (name = "MNT") => {
  const cur = {
    USD: "$",
    MNT: "₮",
    EUR: "€",
    JPY: "¥",
  };
  return cur[name];
};
