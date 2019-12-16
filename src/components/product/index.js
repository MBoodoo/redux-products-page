import React, { useState, useEffect } from "react";
import "./styles.scss";
import { featuredProduct } from "../../mockData";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addToCart } from "../../actions";
import { motion } from "framer-motion";
import animateProduct from "./_animations";

export default ({ meta, id }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(meta.quantity || 1);
  const isFeatured = meta.name === featuredProduct.name;
  const { name, description, img } = meta;

  return (
    <motion.div
      {...animateProduct}
      className="card"
      style={{ gridRow: isFeatured ? "1 / 3" : "" }}
    >
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="add-to-cart">
        <button onClick={() => dispatch(addToCart({ quantity, ...meta }))}>
          Add {quantity} to cart
        </button>
        {quantity > 1 && (
          <div className="toggle" onClick={() => setQuantity(quantity - 1)}>
            -
          </div>
        )}
        <div className="toggle" onClick={() => setQuantity(quantity + 1)}>
          +
        </div>
      </div>
    </motion.div>
  );
};
