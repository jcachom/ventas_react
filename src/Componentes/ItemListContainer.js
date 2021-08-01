
import React, { Component } from 'react';
 
class  ItemListContainer extends  Component {
    render() {
        const colorP={background:'yellow'}

        return (
            <div style={colorP}>
            {this.props.titulo}
            </div>
             );
    }
 
}
export default ItemListContainer ;