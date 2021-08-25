import React from 'react';
import { Component,useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
 import ItemDetail from './ItemDetail';
 import stockData from '../prendas.json'; 
import { useParams } from 'react-router-dom';

 
const  ItemDetailContainer = (props) => {
    const colorP={'font-weight': 'bold'}

    const {sku} = useParams();

    
          const [item, setItem] = useState({sku:'',nombre:'',precio:0,nombre_img:'producto_6.png',tipo:'', stock:0 });


     useEffect(() => {

 
        let myPromise=new Promise( function (resolve , reject) {

            setTimeout(() => {                
                const proceso = true ;

        
            const itemDet =  stockData.find(x => x.sku === sku);
                   
           setItem({...item, sku:itemDet.sku,nombre:itemDet.nombre , precio:itemDet.precio,nombre_img:itemDet.nombre_img,tipo:itemDet.tipo,stock:itemDet.stock})

            

           
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
            

          
     }, [sku]) ;
        
    
            return (
                
                 <div  >



    <ItemDetail 
                       sku = {item.sku}                                   
                       producto = {item.nombre}   
                       nombre_img ={item.nombre_img} 
                       producto ={item.producto}
                       precio ={item.precio} 
                       tipo ={item.tipo}
                       stock ={item.stock}                       
                  ></ItemDetail>


                 </div>
               );   
  }

    export default ItemDetailContainer;

    