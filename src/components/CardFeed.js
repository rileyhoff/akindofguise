import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardFeed.css'

const data =  [
  {
    "id": 0,
    "category": "mens",
    "img": "gusto_shirt_rose_white_stripe_1459-1000x1500.jpg",
    "title": "Gusto Shirt - Stripe, Rose White",
    "price": "$230",
    "info": "The well-loved Gusto design is back for summer in a light, breathable 100% Belgian linen. It features a slightly oversized fit, regular collar, and a front patch pocket.\n\nColor: Rose White Stripe\nMaterial: 100% linen\nFabric Origin: Belgium"
  },
  {
    "id": 1,
    "category": "mens",
    "img": "gusto_shirt_paisley_offwhite_0234-1000x1500.jpg",
    "title": "Gusto Shirt - Paisley, Off White",
    "price": "$230",
    "info": "Our beloved Gusto shirt is back – now in an exquisite Japanese corduroy featuring a printed design reminiscent of the intricate wallpapers found in traditional Icelandic homes. This slightly oversized shirt boasts a regular collar, and a patch pocket in the front.\n\nColor: paisley offwhite\nMaterial: 100% cotton\nFabric Origin: Japan\n\nModel is 185cm and wears size M.\nHandmade in Italy"
  },
  {
    "id": 2,
    "category": "mens",
    "img": "gusto_shirt_dark_olive-1000x1500.jpg",
    "title": "Gusto Shirt - Dark Olive",
    "price": "$230",
    "info": "Our well-loved Gusto design has a slightly oversized fit with a regular collar and a patch pocket in the front. The shirt was cut from a 100% linen fabric with a soft handfeel and beautiful, subtle structure.\n\nColor: dark olive\nMaterial: 100% linen\nFabric Origin: Britain"
  },
  {
    "id": 3,
    "category": "mens",
    "img": "gioia_shirt_petra_paisley-1000x1500.jpg",
    "title": "Gioia Shirt - Paisley",
    "price": "$200",
    "info": "The collection is inspired by the beautiful Arabic country of Jordan, so a dark and intricate paisley pattern should not be missed. Our SS23 in-house design, called Petra paisley, is featured on a soft and summery viscose fabric blend. Our classic Gioia shirt features a spread collar and straight hemline, as well as a chest pocket and mother of pearl buttons.\n\nColor: petra paisley\nMaterial: 51% ecovero (made from certified renewable wood sources) 49% viscose\nFabric Origin: Italian"
  },
  {
    "id": 4,
    "category": "womens",
    "img": "Kamlah-Dress_dark-navy-ripple_0052-1000x1500.jpg",
    "title": "Kamlah Dress - Ripple, Navy",
    "price": "€295",
    "info": "The Kamlah Dress features a chic one-shoulder design, discreet side pockets, and is made from a blend of cotton and linen. The soft natural crinkles give it an effortless look."
  },
  {
    "id": 5,
    "category": "womens",
    "img": "medina_mac_chili_check_0007-1000x1500.jpg",
    "title": "Medina Mac - Check, Chili",
    "price": "€395",
    "info": "The Medina Mac is a beautiful, lightweight coat which comes with raglan sleeves, wide welt pockets as well as adjustable straps at sleeves. The fabric is cut from an Italian 100% cotton fabric, with a classic glencheck pattern."
  },
  {
    "id": 6,
    "category": "womens",
    "img": "Naima_Shirt_tomato_0062-1000x1500.jpg",
    "title": "Nahlia Shirt - Tomato",
    "price": "€155",
    "info": "The Nahila shirt features a regular collar and partially hidden button placket with a unique button design on the front. The adjustable cuffs and rounded seam with side slits provide versatility and comfort. Made from 100% organic cotton mousseline, the super soft fabric boasts a natural crinkle, perfect for any occasion."
  },
  {
    "id": 7,
    "category": "womens",
    "img": "numeira_knit_vest_hummus_melange_0105-1000x1500.jpg",
    "title": "Numeria Knit Vest - Hummus",
    "price": "€195",
    "info": "Our Numeira Knit Vest is the ultimate in comfort and luxury. Knitted from a fine melange blend of cashmere and cotton, it’s incredibly soft. Featuring a rib knit hem for a flattering fit, this vest is perfect for layering or wearing on its own."
  },
  {
    "id": 8,
    "category": "womens",
    "img": "Leelah_Long-Shirt_saphire_stripe_0085-2-1000x1500.jpg",
    "title": "Leelah Long Shirt - Saphire Stripe",
    "price": "€175",
    "info": "Meet our Leehlah long shirt, a versatile piece that can be styled as a dress or shirt. Its oversized fit, asymmetrical collar, partially buttoned placket, rounded seam, and adjustable cuffs make it a must-have. Made from a soft and airy silk and cotton blend with delicate woven stripes."
  },
  {
    "id": 9,
    "category": "accessories",
    "img": "sunglasses_02_1549-1000x1500.jpg",
    "title": "Recofe - Sunglasses",
    "price": "€320",
    "info": "Finally making their debut this summer after an extensive development process in collaboration with a German producer are our Recife Sunglasses. Equipped with Carl Zeiss® lenses and crafted from ultra-light and exceptionally durable titanium, these glasses maintain their shape while providing unparalleled wearing comfort."
  },
  {
    "id": 10,
    "category": "accessories",
    "img": "kette_0215-Kopie-2-1000x1500.jpg",
    "title": "Singet - Gold Necklace",
    "price": "€290",
    "info": "A new addition to our jewellery offering, this unisex necklace expands our popular and well-known Signet line. It is handmade with solid 925 sterling silver and plated with 24 karat gold."
  },
  {
    "id": 11,
    "category": "accessories",
    "img": "milano_derby_black_0165-1-989x1500.jpg",
    "title": "Milano Derby - Shoes",
    "price": "€440",
    "info": "Our Milano Derby is a sleek and classic, 3 eyelet, double-stitched derby shoe. Cut from the finest leather and featuring a Vibram® sole. The shoes are expertly made and finished in Italy. The visible double seam stitching creates a particularly durable construction for outdoor footwear."
  }
]

function CardFeed(props) {
  useEffect(() => {
    //scroll reverse feed to oposite end of page
    var feed = document.querySelector('.card-feed--reverse .item-wrap')
    feed.scrollLeft = feed.scrollWidth;
  },[]);

  return (   
    <div className={props.reverse === 'true' ? "card-feed card-feed--reverse" : "card-feed card-feed--normal"} id={props.category}>

        <h2>{props.category}</h2>
        <div className="item-wrap" >
   
        {
        //loop through all items
        data.map(function(d, idx){
            
            if (props.category === d.category){
            // if property is had the matching category create card
            return (
              <Card 
              key={d.id}
              src={"./images/" + d.img}
              title={d.title}
              price={d.price}
              info={d.info}
              />
            
            )}else { return }
          })}

        </div>
    </div>
  )
}

export default CardFeed