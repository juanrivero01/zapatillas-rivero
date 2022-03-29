import './item.css'

export default function Item ({data}) {
    const { title, price, image, stock, detail} = data

    return (
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Price: $ {price}</p>
                <p>Detail: {detail}</p>
                <p>Stock: {stock}</p>
                <button>More info</button>
            </div>
        </div>
    )
}; 
