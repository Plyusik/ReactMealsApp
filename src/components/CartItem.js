import React from "react";
import classes from "./CartItem.module.css";
import Button from "./UI/Button";

const CartItem = (props) => {
   const onQtyChange = (id, val) => {
      props.onQtyChange(id,val);
   }
   return (
      <div className={classes["cart-item"]}>
         <div className={classes["cart-item__data"]}>
            <span className={classes["cart-item__data--name"]}>
               {props.name}
            </span>
            <div className={classes["cart-item__price-amount"]}>
               <span className={classes["cart-item__data--price"]}>
                  ${props.price}
               </span>
               <div className={classes["cart-item__data--amount"]}>
                  x {props.amount}
               </div> 
            </div>
         </div>
         <div className={classes["cart-item__change"]}>
            <Button className={classes["cart-item__change--btn"]} type="button" onClick={onQtyChange.bind(this, props.id,props.amount-1)}>-</Button>
            <Button className={classes["cart-item__change--btn"]} type="button" onClick={onQtyChange.bind(this, props.id,props.amount+1)}>+</Button>
         </div>
      </div>
   );
};

export default CartItem;
