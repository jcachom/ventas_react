
import React, { Component } from 'react';
import ItemCount from './ItemCount';
 
class  ItemListContainer extends  Component {
    render() {
        //const colorP={background:'yellow'}

        return (
            <div  >
            {this.props.titulo}
            <ItemCount cant_inicial="1"  stock="3" producto="Gabardina" precio="40"></ItemCount>
            </div>
             );
    }
 
}
export default ItemListContainer ;