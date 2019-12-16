import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import ProductList from "./products";
import Forms from "./forms";
import "./styles.scss";

export default () => {
  const selectCart = useSelector(state => state.cart); // Shallow Equal to preserve quantity on new route
  const cartIsEmpty = selectCart.length === 0;

  return (
    <div className="checkout">
      <Forms />
      {!cartIsEmpty && <ProductList cart={selectCart} />}
    </div>
  );
};
