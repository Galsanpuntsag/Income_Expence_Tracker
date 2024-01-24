import moment from "moment";
import {
  FaHome,
  FaGift,
  FaTaxi,
  FaWineGlassAlt,
  FaMicrophone,
  FaCalendar,
  FaRoad,
  FaPeace,
  FaToiletPaper,
  FaBusAlt,
  FaAirFreshener,
} from "react-icons/fa";
import {
  PiForkKnifeFill,
  PiTShirtFill,
  PiExamFill,
  PiIntersectFill,
  PiLadderFill,
  PiLeafFill,
  PiNumberCircleSevenFill,
  PiNumberFiveFill,
  PiOrangeSliceFill,
  PiQuestionFill,
  PiWatchFill,
} from "react-icons/pi";

import {
  MdChildFriendly,
  MdOutlineShoppingBag,
  MdBadge,
  MdHourglassTop,
} from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { BsGlobe, BsMenuAppFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import { useContext } from "react";
import { CategoryContext } from "@/Context/CategoryContext";

export const getIcons = (iconname = "home", iconcolor) => {
  const icons = {
    gift: <FaGift size={30} color={iconcolor} />,
    home: <FaHome size={30} color={iconcolor} />,
    car: <FaTaxi size={30} color={iconcolor} />,
    food: <PiForkKnifeFill size={30} color={iconcolor} />,
    drink: <FaWineGlassAlt size={30} color={iconcolor} />,
    shopping: <PiTShirtFill size={30} color={iconcolor} />,
    menu: <BsMenuAppFill size={30} color={iconcolor} />,
    mic: <FaMicrophone size={30} color={iconcolor} />,
    calendar: <FaCalendar size={30} color={iconcolor} />,
    taxi: <FaRoad size={30} color={iconcolor} />,
    peace: <FaPeace size={30} color={iconcolor} />,
    paper: <FaToiletPaper size={30} color={iconcolor} />,
    bus: <FaBusAlt size={30} color={iconcolor} />,
    airFresh: <FaAirFreshener size={30} color={iconcolor} />,
    exam: <PiExamFill size={30} color={iconcolor} />,
    intersect: <PiIntersectFill size={30} color={iconcolor} />,
    ladder: <PiLadderFill size={30} color={iconcolor} />,
    leaf: <PiLeafFill size={30} color={iconcolor} />,
    seven: <PiNumberCircleSevenFill size={30} color={iconcolor} />,
    five: <PiNumberFiveFill size={30} color={iconcolor} />,
    orange: <PiOrangeSliceFill size={30} color={iconcolor} />,
    question: <PiQuestionFill size={30} color={iconcolor} />,
    watch: <PiWatchFill size={30} color={iconcolor} />,
    child: <MdChildFriendly size={30} color={iconcolor} />,
    bag: <MdOutlineShoppingBag size={30} color={iconcolor} />,
    drone: <GiDeliveryDrone size={30} color={iconcolor} />,
    badge: <MdBadge size={30} color={iconcolor} />,
    hourglass: <MdHourglassTop size={30} color={iconcolor} />,
    pencil: <BiPencil size={30} color={iconcolor} />,
    billiard: <BsGlobe size={30} color={iconcolor} />,
  };
  return icons[iconname];
};

export const getCurrencySymbol = (name = "MNT") => {
  const cur = {
    USD: "$",
    EUR: "€",
    MNT: "₮",
    GBP: "£",
  };
  return cur[name];
};

export const icons = [
  { icon: <FaGift size={30} />, name: "gift" },
  { icon: <FaHome size={30} />, name: "home" },
  { icon: <FaTaxi size={30} />, name: "taxi" },
  { icon: <PiForkKnifeFill size={30} />, name: "food" },
  { icon: <FaWineGlassAlt size={30} />, name: "drink" },
  { icon: <PiTShirtFill size={30} />, name: "shopping" },
  { icon: <BsMenuAppFill size={30} />, name: "menu" },
  { icon: <FaMicrophone size={30} />, name: "mic" },
  { icon: <FaCalendar size={30} />, name: "calendar" },
  { icon: <FaRoad size={30} />, name: "road" },
  { icon: <FaPeace size={30} />, name: "peace" },
  { icon: <FaToiletPaper size={30} />, name: "paper" },
  { icon: <FaBusAlt size={30} />, name: "bus" },
  { icon: <FaAirFreshener size={30} />, name: "airFresh" },
  { icon: <PiExamFill size={30} />, name: "exam" },
  { icon: <PiIntersectFill size={30} />, name: "intersect" },
  { icon: <PiLadderFill size={30} />, name: "ladder" },
  { icon: <PiLeafFill size={30} />, name: "leaf" },
  { icon: <PiNumberCircleSevenFill size={30} />, name: "seven" },
  { icon: <PiNumberFiveFill size={30} />, name: "five" },
  { icon: <PiOrangeSliceFill size={30} />, name: "orange" },
  { icon: <PiQuestionFill size={30} />, name: "question" },
  { icon: <PiWatchFill size={30} />, name: "watch" },
  { icon: <MdChildFriendly size={30} />, name: "child" },
  { icon: <MdOutlineShoppingBag size={30} />, name: "bag" },
  { icon: <GiDeliveryDrone size={30} />, name: "drone" },
  { icon: <MdBadge size={30} />, name: "badge" },
  { icon: <MdHourglassTop size={30} />, name: "hourglass" },
  { icon: <BiPencil size={30} />, name: "pencil" },
  { icon: <BsGlobe size={30} />, name: "globe" },
];

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).startOf("day").fromNow();
  return dt;
};

export const thousandify = (num) => {
  console.log("what'sNum", num);
  return num?.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
