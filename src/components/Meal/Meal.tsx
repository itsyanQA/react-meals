import { MealInformation } from "../../models/MealInformation";
import classes from "./Meal.module.css";
import { useState, useContext, useRef } from "react";
import { CartContext } from "../../store/CartContext";
import BoldText from "../../styled/BoldText";
import MealPrice from "../../styled/MealPrice";
import { ChangeMealAction } from "../../models/ChangeMealAction";
import { Action } from "../../models/enum/Actions";

const Meal: Function = ({ meal }: { meal: MealInformation }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [itemQuantity, setItemQuantity] = useState(1);
  const amountRef = useRef<HTMLInputElement>(null);

  const resetQuantity = (): void => {
    if (amountRef.current !== null) amountRef.current.value = "";
  };

  const onFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const changeMealObj: ChangeMealAction = {
      actionType: Action.INCREMENT,
      mealId: meal.mealId,
      countFactor: itemQuantity,
    };
    if (dispatch) {
      dispatch(changeMealObj);
      setItemQuantity(1);
      resetQuantity();
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div className={classes.mealWrapper}>
        <div className={classes.mealInfo}>
          <BoldText>{meal.mealTitle}</BoldText>
          <span className={classes.mealDescription}>
            {meal.mealDescription}
          </span>
          <MealPrice>{meal.mealPrice}</MealPrice>
        </div>
        <div className={classes.actions}>
          <div className={classes.amountSection}>
            <BoldText>Amount</BoldText>
            <input
              ref={amountRef}
              className={classes.amountInput}
              type="number"
              onChange={(e) => {
                setItemQuantity(+e.target.value);
              }}
            />
          </div>
          <button className={classes.addButton}>+ Add</button>
        </div>
      </div>
      <hr />
    </form>
  );
};

export default Meal;
