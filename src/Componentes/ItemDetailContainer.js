import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./ItemDetail";
//import stockData from "../prendas.json";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemDetailContainer = (props) => {
  const colorP = { "font-weight": "bold" };

  const { id } = useParams();

  const [item, setItem] = useState({
    id: "",
    sku: "",
    nombre: "",
    precio: 0,
    nombre_img: "producto_6.png",
    tipo: "",
    stock: 0,
  });

  /*
  useEffect(() => {
    let myPromise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        const proceso = true;

        const itemDet = stockData.find((x) => x.sku === sku);

        setItem({
          ...item,
          sku: itemDet.sku,
          nombre: itemDet.nombre,
          precio: itemDet.precio,
          nombre_img: itemDet.nombre_img,
          tipo: itemDet.tipo,
          stock: itemDet.stock,
        });

        if (!proceso) {
          resolve("OK");
        } else {
          reject("Error");
        }
      }, 1000);
    });

    myPromise
      .then(function (mensaje) {
        console.log(mensaje);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sku]);
  */
  const [docItem, setdocItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    const currenItem = itemCollection.doc(id);

    currenItem
      .get()
      .then((document) => {
        if (!document.exists) {
          console.log("no items");
          return;
        }

        console.log("items docs details:");

        const dataitem = document.data();
        dataitem["id"] = id;

        setItem({
          ...item,
          id: dataitem["id"],
          sku: dataitem["sku"],
          nombre: dataitem["nombre"],
          precio: dataitem["precio"],
          nombre_img: dataitem["nombre_img"],
          tipo: dataitem["tipo"],
          stock: dataitem["stock"],
        });

        /*
        setItem({
          ...item,
          id : docItem.id,
          sku: docItem.sku,
          nombre: docItem.nombre,
          precio: docItem.precio,
          nombre_img: docItem.nombre_img,
          tipo: docItem.tipo,
          stock: docItem.stock,
        });
        */
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {
        <ItemDetail
          id={item.id}
          sku={item.sku}
          producto={item.nombre}
          nombre_img={item.nombre_img}
          producto={item.producto}
          precio={item.precio}
          tipo={item.tipo}
          stock={item.stock}
        ></ItemDetail>
      }
    </>
  );
};

export default ItemDetailContainer;
