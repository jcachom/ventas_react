import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Componente2 = () => {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div>
      Componente2
      <p>dar mode : {isDarkMode}</p>
    </div>
  );
};

export default Componente2;
