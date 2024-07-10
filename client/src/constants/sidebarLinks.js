import { BsChatDots } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { PiCirclesThree } from "react-icons/pi";

export const sidebarLinks = [
  {
    title: "Chat",
    icon: BsChatDots,
    link: "/",
  },
  {
    title: "Status",
    icon: PiCirclesThree,
    link: "/status",
  },
  {
    title: "Logout",
    icon: FiLogOut,
    link: "/logout",
  },
];
