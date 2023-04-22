import styles from "./Hero.module.css";

const Hero: Function = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>Delicious Food, Delivered To You</h1>
        <p className={styles.heroContent}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={styles.heroContent}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Hero;
