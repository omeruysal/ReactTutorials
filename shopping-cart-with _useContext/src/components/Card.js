import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useBookContext} from "../context/BookContext";

const Card = () => {
    const context = useBookContext();
    const totalCardAmount = context.state.card.reduce((total,book)=>total=total+(book.price*book.count),0).toFixed(2);
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>
    
      <p>Toplam :{totalCardAmount}</p>
      {context.state.card.map(book =>
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar : {book.author}</p>
            <p>Fiyat : {book.price} TL</p>
            <p>Toplam :{(book.price * book.count.toFixed(2))/* noktadan sonraki iki taban gozukmesi icin */}</p>
            <p>Sepetnizde bu kitaptan toplan {book.count} adet var</p>
            <button onClick={() => context.decrease(book.id)}>-</button>
            <button  onClick={() => context.removeFromCard(book.id)}>Sepetten Cikar</button>
            <button onClick={() => context.increase(book.id)}>+</button>
          </div>
        </div>)}
        
    </div>
  );
};

export default Card;
