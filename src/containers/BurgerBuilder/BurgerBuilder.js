import React, { Component } from "react";

import Aux from "../../hoc/Aux1";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.2,
  tomato: 0.2,
  cheese: 0.4,
  meat: 0.8,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      tomato: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 1,
    purchasable: false,
    purchasing: false,
  };

  updatePurchase = (e) => {
    const sum = Object.keys(e)
      .map((c) => {
        return e[c];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredient = (e) => {
    const updateCount = this.state.ingredients[e] + 1;
    const updateIngredients = { ...this.state.ingredients };

    updateIngredients[e] = updateCount;
    const priceAddition = INGREDIENT_PRICES[e];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchase(updateIngredients);
  };
  removeIngredient = (e) => {
    const oldCount = this.state.ingredients[e];
    if (oldCount < 1) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };

    updateIngredients[e] = updateCount;
    const priceAddition = INGREDIENT_PRICES[e];
    const newPrice = this.state.totalPrice - priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchase(updateIngredients);
  };

  orderHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasecancelHandler = () => {
    this.setState({ purchasing: false });
    console.log('cancel');
  };

  purchaseContinued = () => {
    this.setState({ purchasing: false });
    alert('Order Now')
  }

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let e in disabledInfo) {
      disabledInfo[e] = disabledInfo[e] < 1;
    }
    const newPrice = totalPrice.toFixed(2)
    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchasecancelHandler}>
          <OrderSummary
          ingredients={ingredients}
          price={newPrice}
          purchaseCancelled={this.purchasecancelHandler}
          purchaseContinued={this.purchaseContinued}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          purchaseable={purchasable}
          price={newPrice}
          ordered={this.orderHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
