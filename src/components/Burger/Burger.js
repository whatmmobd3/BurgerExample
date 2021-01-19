import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  //   let transformedIngredients = Object.keys(props.ingredients)
  //     .map((igKey) => {
  //       return [...Array(props.ingredients[igKey])].map((_, i) => {
  //         return <BurgerIngredient key={igKey + i} type={igKey} />;
  //       });
  //     })
  //     .reduce((arr, el) => {
  //       return arr.concat(el);
  //     }, []);

  //   if (transformedIngredients.length === 0) {
  //     transformedIngredients = <p>Please start adding ingredients!</p>;
  //   }

  let element = Object.keys(props.ingredients)
    .map((e) => {
      return [...Array(props.ingredients[e])].map((_, i) => {
        return <BurgerIngredient key={e + i} type={e} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    if(element.length < 1){
        element=<p>Please start adding ingredients !</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {element}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
