import './card.css'
import ItemCount from '../ItemCount/ItemCount';



export default function Card() {

  return (
    <figure className="shopping-card">
  <div className="image">
    <img src="jordan.png" alt=""/>
    <button href="#" className="add-to-cart">Add to Cart</button>
  </div>
  <figcaption>
    <h2>Denim Shirt</h2>
    <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
    <div className="price">$65.00 </div>
    <ItemCount/>
  </figcaption>
</figure>
  );
}




