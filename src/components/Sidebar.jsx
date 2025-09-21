import Title from "./Title";
import { links, social } from "../data";
import { FaTimes } from "react-icons/fa";
import useGlobalContext from "../hooks/useGlobalContext";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "side-bar show-sidebar" : "side-bar "}>
      <div className="sidebar-header">
        <Title text1={"sidebar"} text2={"& modal"} />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
