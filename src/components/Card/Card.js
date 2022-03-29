import './card.css'
import React,{useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';



export default function Card({data}) {
  const { title, price, image, stock} = data
  const [ count, setCount ] = useState(1)

  const onAdd = () => {
    console.log (count)
    }


  return (
    <figure className="shopping-card">
  <div className="image">
    <img src= {`./${image}`} alt=""/>
  </div>
  <figcaption>
    <h2>{title}</h2>
    <div className="price">${price} </div>
    <ItemCount stock={stock}/>
  </figcaption>
</figure>
  );
}




