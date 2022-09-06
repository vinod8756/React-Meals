import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} addItem={addItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
