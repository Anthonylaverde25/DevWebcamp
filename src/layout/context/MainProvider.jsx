import React, { useReducer, useState } from "react";
import { MainContext } from "./mainContext";

export const MainProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <MainContext.Provider value={{ menuIsOpen, toggleMenu }}>
      {children}
    </MainContext.Provider>
  );
};
