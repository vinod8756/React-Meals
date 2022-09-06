import classes from "./AvailibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailibleMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meals) => {
            return (
              <MealItem
                name={meals.name}
                price={meals.price}
                description={meals.description}
                key={meals.id}
                id={meals.id}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailibleMeals;
