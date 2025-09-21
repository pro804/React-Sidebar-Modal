import {
  FaFacebook,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsPinterest } from "react-icons/bs";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/",
    text: "documents",
    icon: <FaWpforms />,
  },
];
export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://x.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <IoLogoLinkedin />,
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 5,
    url: "http://gr.pinterest.com/",
    icon: <BsPinterest />,
  },
];
