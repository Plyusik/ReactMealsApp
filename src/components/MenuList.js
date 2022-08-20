import React from "react";
import Card from "./UI/Card";
import classes from "./MenuList.module.css";
import MenuItem from "./MenuItem";

const MenuList = (props) => {
    const onQtyChange = (val, ev) => {
        if (Number.isInteger(ev)) {
            props.onQtyChange(val, ev+1); // Add Btn
        } else {
            props.onQtyChange(val, ev.target.value); // Input
        }
    }
    return (
      <Card className={classes.menulist}>
         {props.menu.map((item) => {
            const cartItem = props.cart.filter(cartItem => cartItem.id === item.id);
            return (
               <MenuItem
                  key={item.id}
                  name={item.name}
                  descr={item.descr}
                  price={item.price}
                  qty={cartItem.length>0 ? cartItem[0].amount : 0}
                  onQtyChange={onQtyChange.bind(this, item.id)}
               ></MenuItem>
            );
         })}
      </Card>
   );
};

export default MenuList;
