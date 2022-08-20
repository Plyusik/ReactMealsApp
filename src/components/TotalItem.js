import React from "react";
import classes from "./TotalItem.module.css";
import Button from "./UI/Button";

const TotalItem = (props) => {
   const onOrder = () => {
      if (props.total === 0) {
         console.log("Nothing to be ordered...");
      } else {
         console.log("Ordering...");
      }
   };
   return (
      <>
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>${props.total}</span>
         </div>
         <div className={classes.buttons}>
            <Button
               type="button"
               className={classes["close-btn"]}
               onClick={props.onClose}
            >
               Close
            </Button>
            {props.total === '0.00' ? (
               ""
            ) : (
               <Button type="submit" onClick={onOrder}>
                  Order
               </Button>
            )}
         </div>
      </>
   );
};

export default TotalItem;
