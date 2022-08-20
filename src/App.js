import React, { useState } from "react";
import TheHeader from "./components/TheHeader";
import IntroSection from "./components/IntroSection";
import MenuList from "./components/MenuList";

function App() {
   const menu = [
      { name: "Sushi", descr: "Finest fish and veggies", price: 22.99, id: 1 },
      { name: "Schnitzel", descr: "A german speciality!", price: 16.5, id: 2 },
      {
         name: "Barbecue Burger",
         descr: "American, raw, meaty",
         price: 22.99,
         id: 3,
      },
      {
         name: "Green Bowl",
         descr: "healthy.. and green...",
         price: 18.99,
         id: 4,
      },
      {
         name: "Soup",
         descr: "Mmm, chicken soup!",
         price: 17.77,
         id: 5,
      },
   ];
   const [cart, setCart] = useState([]);
   const onQtyChange = (id, val) => {
      setCart((prev) => {
         const updatedCart = [...prev];
         if (val <= 0) {
            return updatedCart.filter((item) => item.id!==id)
         } else {
            if (updatedCart.filter(item => item.id === id).length === 0) {
               return [...updatedCart, {id, amount: val}];
            }
            updatedCart.forEach(item => {
               if (item.id === id) {
                  item.amount = val;
               }
            });
            return updatedCart;
         }
      })
   }
   return (
      <>
         <TheHeader menu={menu} cart={cart} onQtyChange={onQtyChange}/>
         <IntroSection />
         <MenuList menu={menu} cart={cart} onQtyChange={onQtyChange}/>
      </>
   );
}

export default App;
