import React,{useState} from 'react'
const ItemCount = ({stock, initial, onAdd}) => {


const [ count, setCount ] = useState(1)
const removeStock = () => {
    if (count > 0) {
    setCount(count - 1)
    }
}

const Add = () =>{
    if(count < stock) {
      setCount(count + 1)
  }
  }


return (
    <div>
    <button onClick={onAdd, Add} href="#" className="add-to-cart">Add to Cart</button>
    <button onClick={removeStock}>-</button>
    <p>Quantity: {count}</p>
    <button onClick={onAdd, Add}>+</button>
    </div>
)
}

export default ItemCount