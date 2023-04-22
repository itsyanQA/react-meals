import classes from "./Header.module.css";
import CartInNav from "../CartInNav/CartInNav";

const Header: Function = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>ReactMeals</h1>
        <CartInNav />
      </header>
    </>
  );
};

export default Header;
