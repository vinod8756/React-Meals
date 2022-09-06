import { HiOutlineShoppingCart } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [animation , setanimation] = useState(false)
  const cartctx = useContext(CartContext);
  const {items } = cartctx;

  const ItemsInCart = items.reduce(
    (currentnumber, items) => currentnumber + items.amount,
    0
  );

  const btnclasses = `${classes.button} ${animation ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setanimation(true)

    const timer = setTimeout(() => {
      setanimation(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  },[items])

  return (
    <>
      <button className={btnclasses} onClick={() => props.clicked(true)}>
        <span className={classes.icon}>
          <HiOutlineShoppingCart />
        </span>

        <span>Your Cart</span>

        <span className={classes.badge}>{ItemsInCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
