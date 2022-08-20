import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./TheHeader.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import CartIcon from "./UI/CartIcon";
import Overlay from "./UI/Overlay";
import CartItem from "./CartItem";
import TotalItem from "./TotalItem";

const TheHeader = (props) => {
   const cartExtended = props.cart.map((item) => {
      const itemData = props.menu.filter((menuItem) => menuItem.id === item.id);
      if (itemData.length <= 0 || itemData.length > 1) {
         console.log("Error happened!");
         return [];
      }
      return Object.assign(item, {
         name: itemData[0].name,
         price: itemData[0].price,
      });
   });

   const [isCartShown, setIsCartShown] = useState(false);
   const onShowCart = () => {
      setIsCartShown(true);
   };
   const onHideCart = () => {
      setIsCartShown(false);
   };

   return (
      <>
         {isCartShown &&
            ReactDOM.createPortal(
               <Overlay onClick={onHideCart}>
                  <Card
                     className={classes["cart-card"]}
                     onClick={(event) => {
                        event.stopPropagation();
                     }}
                  >
                     {cartExtended.map((item) => {
                        return (
                           <CartItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              amount={item.amount}
                              onQtyChange={props.onQtyChange}
                           ></CartItem>
                        );
                     })}
                     <TotalItem total={cartExtended.reduce((acc,cur) => {return (acc + cur.amount*cur.price)},0).toFixed(2)} onClose={onHideCart} />
                  </Card>
               </Overlay>,
               document.getElementById("overlay")
            )}
         ;
         <header className={classes.header}>
            <h1 className={classes.header__logo}>ReactMeals</h1>
            <Button type="button" className="btn--darken" onClick={onShowCart}>
               <CartIcon />
               <span> Your Cart</span>
               <div className="cart-counter">
                  {props.cart.reduce((acc, cur) => {
                     return +acc + cur.amount;
                  }, 0)}
               </div>
            </Button>
         </header>
      </>
   );
};

export default TheHeader;
