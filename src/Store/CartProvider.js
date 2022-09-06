import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedAmount =  state.totalAmount + action.value.price * action.value.amount;
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.value.id);
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount : existingCartItem.amount + action.value.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }
    
   
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.amount === 1) {
     updatedItems = state.items.filter(item => item.id !== action.id ) 
    }
    else{
     const updatedItem = {
      ...existingCartItem,
      amount : existingCartItem.amount - 1
     }
     updatedItems = [...state.items] 
     updatedItems[existingCartItemIndex] = updatedItem;
    }
    const updatedAmount = state.totalAmount - existingCartItem.price

    return {
      items : updatedItems,
      totalAmount : updatedAmount
    }
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartData, disaptchaction] = useReducer(CartReducer, defaultState);

  const addCartItemHandler = (item) => {
    disaptchaction({ type: "ADD_ITEM", value: item });
  };

  const removeCartItemtHandler = (id) => {
	disaptchaction({type : "REMOVE_ITEM", id : id})
  };

  const cartContext = {
    items: cartData.items,
    totalAmount: cartData.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemtHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
