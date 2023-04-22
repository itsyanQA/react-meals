import { ReactComponent as CartSvg } from "../../svg/cart.svg";
import classes from "./CartInNav.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../store/CartContext";
import CartModal from "../CartModal/CartModal";

const CartInNav: Function = () => {
  const { cartItems } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aggregateCartQuantities = (): number => {
    let totalItems: number = 0;
    for (let meal of cartItems) {
      totalItems += meal.mealCount;
    }
    return totalItems;
  };

  return (
    <>
      <div
        className={classes.cartWrapper}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <CartSvg />
        <span style={{ fontWeight: "bold" }}>Your Cart</span>
        <div className={classes.itemsAmount}>{aggregateCartQuantities()}</div>
      </div>
      {isModalOpen && (
        <CartModal
          currentModalVisibility={isModalOpen}
          setModalVisibility={setIsModalOpen}
        />
      )}
    </>
  );
};

export default CartInNav;
