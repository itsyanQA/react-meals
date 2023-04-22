import classes from "./CartModal.module.css";
import mealsObject from "../../meals.json";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import MealInCart from "../MealInCart/MealInCart";
import { MealCount, MealInformation } from "../../models/MealInformation";
import ReactDOM from "react-dom";
import BoldText from "../../styled/BoldText";
import CartActionButton from "../../styled/CartActionButton";
import { mainColor } from "../../utils/constants/colors";

const CartModal: Function = ({
  setModalVisibility,
}: {
  setModalVisibility: Function;
}) => {
  const { cartItems }: { cartItems: MealCount[] } = useContext(CartContext);
  const availableMeals: MealInformation[] = mealsObject.meals;
  const portalDiv = document.getElementById("portal")!;

  const getTotalAmountPrice: Function = (): number => {
    let totalAmountPrice = 0;
    for (let meal of cartItems) {
      let originalPrice: string | undefined = availableMeals?.find(
        (availableMeal: MealInformation) => availableMeal.mealId === meal.mealId
      )?.mealPrice;
      if (originalPrice) {
        if (meal.mealCount > 0)
          totalAmountPrice += +originalPrice.substring(1) * meal.mealCount;
      }
    }
    return +totalAmountPrice.toFixed(2);
  };

  const isCartEmpty = (): boolean => {
    let isCartEmptyFlag: boolean = true;
    for (let meal of cartItems) {
      if (meal.mealCount > 0) {
        isCartEmptyFlag = false;
        break;
      }
    }
    return isCartEmptyFlag;
  };

  if (isCartEmpty()) {
    return ReactDOM.createPortal(
      <div
        onClick={() => setModalVisibility(false)}
        className={classes.cartModalBackdrop}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${classes.cartModalContainer} ${classes.cartEmpty}`}
        >
          <BoldText>Cart Is Empty.</BoldText>
        </div>
      </div>,
      portalDiv
    );
  }
  return ReactDOM.createPortal(
    <div
      onClick={() => setModalVisibility(false)}
      className={classes.cartModalBackdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.cartModalContainer}
      >
        {availableMeals.map((meal: MealInformation) => {
          const isMealCountBiggerThanOne: boolean = !!cartItems.find(
            (cartItem) => {
              return cartItem.mealCount > 0 && cartItem.mealId === meal.mealId;
            }
          );
          if (isMealCountBiggerThanOne) {
            return (
              <MealInCart
                key={meal.mealTitle + meal.mealId.toString}
                meal={meal}
              />
            );
          }
        })}
        <div className={classes.amountSection}>
          <BoldText fontSize="22px">Total Amount</BoldText>
          <span className={classes.totalPrice}>${getTotalAmountPrice()}</span>
        </div>
        <div className={classes.actions}>
          <CartActionButton onClick={() => setModalVisibility(false)}>
            Close
          </CartActionButton>
          <CartActionButton
            backgroundColor={mainColor}
            color="white"
            onClick={() => console.log("Ordering...")}
          >
            Order
          </CartActionButton>
        </div>
      </div>
    </div>,
    portalDiv
  );
};

export default CartModal;
