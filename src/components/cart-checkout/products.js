import React, { useState, useEffect } from "react";
import { reduceTotalPrice } from "../../utils";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions";

export default ({ cart }) => {
  const [isEditing, setEditing] = useState(false);
  const total = reduceTotalPrice(cart);

  const products = cart.map(product => (
    <Product meta={product} isEditing={isEditing} />
  ));

  return (
    <div className="in-cart">
      <div className="cart-info">
        You have {cart.length} item(s) in your cart
        <button onClick={() => setEditing(!isEditing)}>
          {!isEditing ? "Edit Cart" : "Done"}
        </button>
      </div>
      {products}
      <div className="checkout-total">Total: {total}</div>
    </div>
  );
};

const Product = ({ meta, isEditing }) => {
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(meta.quantity);
  const { name, price, quantity } = meta;

  useEffect(() => {
    if (newQuantity > quantity) {
      dispatch(addToCart({ ...meta, quantity: newQuantity }));
    } else if (newQuantity < quantity) {
      dispatch(removeFromCart({ ...meta, quantity: newQuantity }));
    }
  }, [isEditing]);

  return (
    <div className="checkout-product">
      {isEditing && (
        <button
          onClick={() => dispatch(removeFromCart({ ...meta, quantity }))}
          className="remove-product"
        >
          -
        </button>
      )}
      <div className="product-name">
        {name}
        <sup>(${price})</sup> x {newQuantity}
      </div>
      <div className="product-price">${price * newQuantity}</div>
      {isEditing && (
        <span>
          <button onClick={() => setNewQuantity(newQuantity + 1)}>+</button>
          {newQuantity > 1 && (
            <button onClick={() => setNewQuantity(newQuantity - 1)}>-</button>
          )}
        </span>
      )}
    </div>
  );
};
