import React from "react";

const ItemListContainer = ( props ) => {
    const{
        items,
        titulo
    } = props

    return (
        <div>
            {
                items.map( (elemento) => {
                    return <li>{elemento}</li>
                
            })
            
            }

        </div>
    )
}



export default ItemListContainer;