import React, { useEffect, useState } from "react";
import Item from "./Item";
//import stockData from '../prendas.json';
import Grid from "@material-ui/core/Grid";
import { getFirestore } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import PreLoader from "./preLoader";

const ItemList = () => {


  const [itemsList, setitemsList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((QuerySnapshot) => {
        if (QuerySnapshot.size === 0) {
          console.log("no items");
        }
        setitemsList(QuerySnapshot.docs.map((document) => document.data()));
      })
      .catch((error) => console.log(error));
  }, []);

  const altura = { height: "50px" };

  return (
    <>
      {itemsList.length === 0 ? (
        <div class="container">
          <PreLoader></PreLoader>
        </div>
      ) : (
        <div>
          {console.log({ itemsList })}

          <div style={altura}>Listado de Productos </div>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {itemsList.map((data, key) => {
              return (
                <Grid container item xs={6} spacing={3}>
                  <div key={key}>
                    <Item
                      sku={data.sku}
                      producto={data.nombre}
                      nombre_img={data.nombre_img}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </>
  );
};
export default ItemList;

//  { stockData.map((data, key) => {
