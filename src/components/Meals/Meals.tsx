import mealsObject from "../../meals.json";
import Meal from "../Meal/Meal";
import { MealInformation } from "../../models/MealInformation";
import classes from "./Meals.module.css"

const Meals: Function = () => {
  const meals: MealInformation[] = mealsObject.meals;
  return (
    <div className={classes.mealsWrapper}>
      {meals.map((meal: MealInformation) => {
        return <Meal key={meal.mealId} meal={meal} />;
      })}
    </div>
  );
};

export default Meals;
