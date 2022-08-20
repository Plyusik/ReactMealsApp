import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
   return (
      <>
         <label
            htmlFor={props.id}
            className={`${classes.label} ${props.labelClassName}`}
         >
            {props.label}
         </label>
         <input
            value={props.value}
            onChange={props.onInputQtyChange}
            id={props.id}
            type={props.type}
            className={`${classes.input} ${props.inputClassName}`}
         ></input>
      </>
   );
};

export default Input;
