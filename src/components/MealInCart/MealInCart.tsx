import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import classes from "./MealInCart.module.css";
import { MealInformation } from "../../models/MealInformation";
import BoldText from "../../styled/BoldText";
import MealPrice from "../../styled/MealPrice";
import { MealCount } from "../../models/MealInformation";
import QuantityButton from "../../styled/QuantityButton";
import { Action } from "../../models/enum/Actions";
import { mainColor } from "../../utils/constants/colors";

const MealInCart = ({ meal }: { meal: MealInformation }) => {
  const { cartItems, dispatch } = useContext(CartContext);

  const applyCartChanges = (actionType: Action) => {
    if (dispatch)
      dispatch({ actionType: actionType, mealId: meal.mealId, countFactor: 1 });
  };

  const getMealQuantity = (): number => {
    return +cartItems[
      cartItems.findIndex((cartMeal) => {
        return cartMeal.mealId === meal.mealId;
      })
    ].mealCount;
  };

  const calculateMealPrice = (): number => {
    const originalPrice: string = meal.mealPrice.substring(1);
    return +(+originalPrice * getMealQuantity()).toFixed(2);
  };

  return (
    <>
      <div className={classes.mealInCartWrapper}>
        <div className={classes.leftSection}>
          <BoldText fontSize="22px">{meal.mealTitle}</BoldText>
          <div className={classes.priceAndQuantitySection}>
            <MealPrice fontSize="12" className={classes.price}>
              ${calculateMealPrice()}
            </MealPrice>
            <span className={classes.quantity}>{`x ${getMealQuantity()}`}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <QuantityButton onClick={() => applyCartChanges(Action.DECREMENT)}>
            -
          </QuantityButton>
          <QuantityButton onClick={() => applyCartChanges(Action.INCREMENT)}>
            +
          </QuantityButton>
        </div>
      </div>
      <hr style={{ backgroundColor: mainColor, height: "1px", border: "0" }} />
    </>
  );
};

export default MealInCart;
