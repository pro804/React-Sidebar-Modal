import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }
  return context;
};

export default useGlobalContext;
