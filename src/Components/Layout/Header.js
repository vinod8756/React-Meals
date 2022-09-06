import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  const buttonclicked = (data) => {
    props.openCart(data);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton clicked={buttonclicked} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="food"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
