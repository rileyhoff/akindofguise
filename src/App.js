import React, { useState } from "react";
import "./App.css";
import CardFeed from "./components/CardFeed";
import Hero from "./components/Hero";

function App() {

  const [isOpen, setOpen] = useState(false);

  const toggleClass = (el) => {
    setOpen(!isOpen);
   
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="header">
          <a href="#hero">
            <img src="./akog-logo-static.png" alt="A kind of Guise" />
          </a>
        </h1>
        <div className="mbl-icon" onClick={toggleClass}>
          <img src="./images/mbl-icon.png" alt="mobile menu"/>
        </div>
        <div className= {isOpen ? "nav-links nav-links--open" : "nav-links nav-links--closed"}>
          <a className="link mens" href="#mens" onClick={toggleClass}>
            <span>mens</span>
          </a>
          <a className="link womens" href="#womens" onClick={toggleClass}>
            <span>womens</span>
          </a>
          <a className="link accessories" href="#accessories" onClick={toggleClass}>
            <span>accessories</span>
          </a>
          <a className="link about" href="#about" onClick={toggleClass}>
            <span>about</span>
          </a>
          <div className='cross' onClick={toggleClass}><div className='bar1'></div><div className='bar2'></div></div>
        </div>
        <div className="cart">
          <span id="cart-count"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Capa 1"
            viewBox="0 0 50 50"
            x="0px"
            y="0px"
          >
            <title>1</title>
            <path d="M2.5,6.72A1.88,1.88,0,0,1,4.39,4.83H8a4.4,4.4,0,0,1,4,2.52H44.35a3.15,3.15,0,0,1,3,4l-3.23,12a5.68,5.68,0,0,1-5.48,4.2H16l.43,2.25a1.88,1.88,0,0,0,1.85,1.53H41a1.9,1.9,0,0,1,0,3.79H18.23a5.68,5.68,0,0,1-5.57-4.61L8.6,9.12A.63.63,0,0,0,8,8.61H4.39A1.88,1.88,0,0,1,2.5,6.72ZM12.59,41.39a3.78,3.78,0,1,1,3.78,3.78,3.78,3.78,0,0,1-3.78-3.78Zm26.47-3.78a3.78,3.78,0,0,1,0,7.56h0a3.78,3.78,0,0,1,0-7.56Z" />
            <text
              x="0"
              y="65"
              fill="#000000"
              fontSize="5px"
              fontWeight="bold"
              fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
              Created by Alejandro
            </text>
            <text
              x="0"
              y="70"
              fill="#000000"
              fontSize="5px"
              fontWeight="bold"
              fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
              from the Noun Project
            </text>
          </svg>
        </div>
        <div className="bg"></div>
      </div>
      <Hero />
      <CardFeed category="mens" reverse="false" />
      <CardFeed category="womens" reverse="true" />
      <CardFeed category="accessories" reverse="false" />
      <footer id="about">
        <h2>
          <span>about</span>
        </h2>
        <p>
          A Kind of Guise is a German brand that offers a wide range of
          menswear, womenswear and accessories. Besides our seasonal collection,
          which is released twice a year, we also provide never-out-of-stock
          products for your daily wardrobe.
          <br />
          <br />
          Our design is contemporary yet timeless, classy yet functional. We
          only use carefully selected high-quality fabrics and manufacture as
          local as possible. This means that most of our products are made in
          Germany and some pieces in Italy.
          <br />
          <br />
          Globally stocked in around 80 boutiques and department stores as well
          as in our own retail outposts, you can convince yourself of our
          outstanding quality and service.
          <br />
          <br />
          Come in and say hello and as always, stay classy!
        </p>
        <div className="bottom">
          <a href="https://sqkz.art/design">created by SQKZ - Riley Hoff</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
