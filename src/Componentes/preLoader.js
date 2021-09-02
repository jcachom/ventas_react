import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from './logo.png';

const preLoader = () => {
  return (
    <div>
      <span>Cargando</span>
      <img src={require(`../img/${"preloader_img.gif"}`).default}></img>
    </div>
  );
};
export default preLoader;
