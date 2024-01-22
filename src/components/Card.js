import './CardFeed.js';
import'../App.js';
import React, { useState, useEffect} from 'react';

function Card(props){

  const [isActive, setActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleClass = (el) => {
    setActive(!isActive);
   
  };

  useEffect(() => {


     document.getElementById('cart-count').innerHTML = cartCount;
     if ( cartCount > 0 ){
        document.getElementById('cart-count').className = ('full-cart');
     }else {
      document.getElementById('cart-count').className = ('empty-cart');
     }
     
  },[cartCount]);


  return (
    <div className={isActive ? "card active" : "card"} >
      <figure onClick={toggleClass} className="card-img-wrap">
        <div className='cross'><div className='bar1'></div><div className='bar2'></div></div>
        <img src={props.src} alt="" className="card-img" />
      </figure>
      <div className="card-txt">
        <div onClick={toggleClass} className='card-top'>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-price'>{props.price}</p>
        </div>
        <div className='card-bottom'>
          <p className='card-info'>{props.info}</p>
          <div className='atc'><div className='sizes'>
            <label>
              <input type="radio" name="sizes" />
              <span class="checkmark"></span>
              <span className='txt'>XS</span>
            </label>
            <label>
              <input type="radio" name="sizes"   />
              <span class="checkmark"></span>
              <span className='txt'>S</span>
            </label>
            <label>
              <input type="radio" name="sizes" />
              <span class="checkmark"></span>
              <span className='txt'>M</span>
            </label>
            <label>
              <input type="radio" name="sizes" />
              <span class="checkmark"></span>
              <span className='txt'>L</span>
            </label>
            <label>
              <input type="radio" name="sizes" />
              <span class="checkmark"></span>
              <span className='txt'>XL</span>
              
            </label>
          </div><span onClick={()=> {setCartCount(cartCount + 1)}}>Add to Cart</span></div>
        </div>
      </div>
    </div>
  )
}

export default Card