import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import ItemList from './ItemList'
import MockProducts from '../mockProducts/mockProducts'

const ItemListContainer = ({children}) => {
    const [items, setItems] = useState([])


    const getItems = () => {
        return new Promise ((resolve, reject) => {
        return setTimeout(() => {
            resolve(MockProducts);
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
                <ItemList />
            </div>
        ) 
}

export default ItemListContainer;