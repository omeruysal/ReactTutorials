import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookContextProvider from './context/BookContext'
import Products from "./components/Products";
import Card from "./components/Card";

import { Commercial } from "./components/Commercial";
//find methodu kosulu saglayan ilk elemani dondurur.Kosul saglandiktan sonra devam etmez
//some methodu kosulu saglayan varsa true dondurur
//every methodu dizideki butun elemanlarin kosulu saglayip saglamadigina bakar, hepsi saglarsa true doner, bir tane bile saglamayan varsa false doner
///map methodu dizi elemanlarina verilen callback fonksiyonlarini uygular ve yeni bir dizi olusturur.Parametre olarak (eleman,index) alir
//filter methodu dizi elemanlarina kosul bulunduran callback fonksiyonu uygulanir, kosulu saglayan elemanlardan yeni bir dizi olusturulur
//reduce methodu elimizdeki elemanlari kullanarak tek bir deger dondurmemisi saglar ornek; [1,2,3,4,5].reduce ( (total,num) => total=total+num,0) // 0 totalin baslangic degeridir
export default function App() {

  return (
    <BookContextProvider>
      <Router>
        <div className="App">
          <h1>
            Shopping Card
      </h1>
          <Route exact path="/" component={Products} />
          <Route path="/card" component={Card} />
          <Route path="/com" component={Commercial} />
        </div>
      </Router>
    </BookContextProvider>
  );
}
