
import React, { Component } from 'react';
import Item from './Item';
import stockData from '../prendas.json'; 
import Grid from '@material-ui/core/Grid';

 
class  ItemList extends  Component {


    constructor(props) {
        super(props);
       
      }
    
    componentDidMount() {


        let myPromise=new Promise( function (resolve , reject) {

            setTimeout(() => {                
                const proceso = true ;
                // codigo llamada que toma tiempo            
                if ( !proceso) {
                       resolve("OK");
                   } else {
                        reject("Error");
                   }

            },1000);
         
           }) ;
     
           myPromise.then ( 
               function (mensaje) {
                   console.log(mensaje);
                }).catch ( function ( error) {
                       console.log(error) ;
             }) ;


    }

    render() {

        const altura={height: '50px'}
    
        return (
            <div>

                   
             <div style={altura}  >Listado de Productos </div>

            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={5} >

            { stockData.map((data, key) => {
    
          return (

            <Grid container item xs={6} spacing={3}>
            <div key={key}>
              <Item
                sku = {data.sku}                                   
                producto = {data.nombre}   
                nombre_img ={data.nombre_img}             
              />
            </div>

            </Grid>
          );

         

        })}


</Grid>

           
            </div>
             );
    }
 
}
export default ItemList ;