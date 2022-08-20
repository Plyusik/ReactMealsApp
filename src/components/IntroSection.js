import React from "react";
// import mealsimg from './../static/meals.jpg'
import Card from "./UI/Card";
import classes from "./IntroSection.module.css";

const IntroSection = () => {
   return (
      <>
         <section className={classes["intro-section"]}></section>
         <Card className={classes["intro-section__card"]}>
            <h2 className={classes["intro-section__heading"]}>
               Delicious Food, Delivered To You
            </h2>
            <p>
               Choose your favourite meal from our broad selection of available
               meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
               All our meals are cooked with high-quality ingredients,
               just-in-time and of course by experienced chefs!
            </p>
         </Card>
      </>
   );
};

export default IntroSection;
