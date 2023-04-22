import React, { createContext, useEffect } from "react";
import { MealCount } from "../models/MealInformation";
import { useReducer } from "react";
import mealsObject from "../meals.json";
import { Action } from "../models/enum/Actions";
import { ChangeMealAction } from "../models/ChangeMealAction";

interface CartContextType {
  cartItems: MealCount[] | [];
  dispatch: React.Dispatch<ChangeMealAction> | null;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  dispatch: null,
});

const reducer = (state: MealCount[], action: ChangeMealAction): MealCount[] => {
  switch (action.actionType) {
    case Action.INCREMENT: {
      return state.map((meal) => {
        if (meal.mealId === action.mealId) {
          meal.mealCount = meal.mealCount + action.countFactor;
          return meal;
        }
        return meal;
      });
    }
    case Action.DECREMENT: {
      return state.map((meal) => {
        if (meal.mealId === action.mealId) {
          if (meal.mealCount > 0) {
            meal.mealCount = meal.mealCount - action.countFactor;
          }
          return meal;
        }
        return meal;
      });
    }
    default: {
      return state;
    }
  }
};

export const CartContextProvider = (props: any) => {
  const [cartItems, dispatch] = useReducer(reducer, []);
  if (cartItems.length === 0) {
    for (let meal of mealsObject.meals) {
      cartItems.push({ mealId: meal.mealId, mealCount: 0 });
    }
  }
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
