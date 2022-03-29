import React,{useState, useEffect} from 'react'
import Item from './item'


export default function ItemList({}) { 
    const [items, setItems] = useState([])


    const getItems = () => {
        return new Promise ((resolve, reject) => {
        return setTimeout(() => {
            resolve(items);
        }, 2000);
    })
    } 



    useEffect( () => {
        getItems().then( (productos) => {
            setItems(productos)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return(
        <div className="container-cards">
            <h2> Brief information about the products</h2>
            {items.map( ( item ) => {
                const {id} = item

                return(
                    <Item data={item} key={id}/>
                )
            })}
        </div>
    )

}
