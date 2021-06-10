import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useBookContext} from '../context/BookContext'

const Products = props => {
  const context = useBookContext();
  console.log(context);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/card">Sepetim</Link>
      </h2>
      {context.state.bookList.map(book =>
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar : {book.author}</p>
            <p>Fiyat : {book.price} TL</p>
            <button onClick={() => context.addToCard(book)}>Sepete Ekle</button>
          </div>
        </div>)}

    </div>
  );
};

export default Products;
