import React,{useState, useEffect} from 'react'
import Item from './item'



 const ItemList = ({items}) =>{  
    
    return(
        <div className="container-cards">
            <h2> Brief information about the products</h2>
            {items.map( ( item ) => {
                const {id} = item

                return(
                    <Item data={item} key={item.id}/>
                )
            })}
        </div>
    )

}
export default ItemList