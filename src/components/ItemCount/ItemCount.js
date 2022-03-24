import React,{useState} from 'react'


const ItemCount = () => {
const [ count, setCount ] = useState(1)
const [stock, setStock] = useState (10)




const onAdd = () => {
    if(count < stock) {
        setCount(count + 1)
    }
}
const removeStock = () => {
    if (count > 0) {
    setCount(count - 1)
    }
}

return (
    <div>
    <button onClick={removeStock}>-</button>
    <p>Quantity: {count}</p>
    <button onClick={onAdd}>+</button>
    </div>
)
}

export default ItemCount