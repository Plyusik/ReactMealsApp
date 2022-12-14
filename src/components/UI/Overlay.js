import React from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
   return <div className={classes.overlay} onClick={props.onClick}>{props.children}</div>;
};

export default Overlay;
