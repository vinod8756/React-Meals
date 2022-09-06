import { Fragment } from "react";
import AvailibleMeals from "./AvailibleMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailibleMeals />
    </Fragment>
  );
};

export default Meals;
