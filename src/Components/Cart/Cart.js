import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const cartItem = cartctx.items.length > 0;

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItem({...item , amount : 1})
  };

  return (
    <Modal closeModal={(data) => props.closeCart(false)}>
      <ul className={classes["cart-items"]}>
        {cartctx.items.map((items) => (
          <CartItem
            key={items.id}
            name={items.name}
            amount={items.amount}
            price={items.price}
            onRemove={cartItemRemoveHandler.bind(null , items.id)}
            onAdd={cartItemAddHandler.bind(null , items)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.closeCart(false)}
        >
          Close
        </button>
        {cartItem && (
          <button
            className={classes.button}
            onClick={() => props.closeCart(false)}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
