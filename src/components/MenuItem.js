import React from "react";
import classes from "./MenuItem.module.css";
import Button from "./UI/Button";
import Input from "./../components/UI/Input";

const MenuItem = (props) => {
   return (
      <div className={classes["menu-item"]}>
         <div className={classes["menu-item__data"]}>
            <span className={classes["menu-item__data--name"]}>
               {props.name}
            </span>
            <span className={classes["menu-item__data--descr"]}>
               {props.descr}
            </span>
            <span className={classes["menu-item__data--price"]}>
               ${props.price}
            </span>
         </div>
         <div className={classes["menu-item__cart-data"]}>
            <div className={classes["menu-item__cart-data--input-div"]}>
               <Input
                  value={props.qty}
                  type="number"
                  id={`amount__${props.name}`}
                  label="Amount"
                  inputClassName={classes["menu-item__cart-data--amount"]}
                  onInputQtyChange = {props.onQtyChange}
               ></Input>
            </div>
            <Button type="button" onClick={props.onQtyChange.bind(this, props.qty)}>+ Add</Button>
         </div>
      </div>
   );
};

export default MenuItem;
