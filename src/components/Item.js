import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart]= useState(false);
  function addToCart(){
    setAddCart((addCart) => !addCart)
  }
  
  
  return (
    <li className={addCart? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addCart? 'remove':'add'} onClick={addToCart}>Add To Cart</button>
      
      
    </li>
  );
}

export default Item;
