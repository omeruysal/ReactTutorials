import { createContext, useContext, useState } from 'react'

import { data } from "./../data";
const BookContext = createContext();
export function useBookContext() {
    return useContext(BookContext);
}
export default function BookContextProvider({ children }) {
    const [state, setState] = useState({
        bookList: data,
        card: []
    })
    const addToCard = (book) => setState({
        ...state,
        card: state.card.find(cardItem => cardItem.id === book.id)   //find ile sepete ekleyecegimiz urun zaten sepette mi diye bakariz   
            ? state.card.map(cardItem => cardItem.id === book.id  //
                ? { ...cardItem, count: cardItem.count + 1 } : cardItem) //sepette varsa sayisini arttiririz
            : [...state.card, { ...book, count: 1 }] //sepette o kitap yoksa , olustururuz
    })
    const increase = id => {
        setState({
            ...state,
            card: state.card.map(cardItem => cardItem.id === id ? { // verilen id'li kitap cardtaki kitaplarda var mi bakilir, varsa sayisi arttirilir
                ...cardItem, count:
                    cardItem.count + 1
            } : cardItem)
        })
    }
    const decrease = id => {
        setState({
            ...state,
            card: state.card.map(cardItem => cardItem.id === id ? { //verilen id'li kitap cardtaki kitaplarda var mi bakilir, varsa sayisi 1den kucuk olmiyacak sekilde azaltilir
                ...cardItem, count:
                    cardItem.count > 1 ? cardItem.count - 1 : 1
            } : cardItem)
        })
    }
    const removeFromCard = id => {n
        setState({
            ...state,
            card: state.card.filter(cardItem=>cardItem.id !== id)//Gelen id disindakileri aktaririz
        })
    }
    return (
        <BookContext.Provider value={{ state, addToCard, increase, decrease, removeFromCard }}>
            {children}
        </BookContext.Provider>
    )
}