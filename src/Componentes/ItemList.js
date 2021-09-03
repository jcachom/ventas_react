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

        const newlist = QuerySnapshot.docs.map((collection) => {
          const data = collection.data();
          data["id"] = collection.id;
          return data;
        });

        setitemsList(newlist);

        console.log("getfirebase:");
        console.log(itemsList);
      })
      .catch((error) => console.log(error));
  }, []);

  const altura = { height: "50px" };

  return (
    <>
      {itemsList.length === 0 ? (
        <div class="container">
          <PreLoader mensaje="Cargando"></PreLoader>
        </div>
      ) : (
        <div>
          {console.log(itemsList)}

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
                      id={data.id}
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
