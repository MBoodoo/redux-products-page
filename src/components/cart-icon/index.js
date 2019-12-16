import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import animateCartCount from "./_animations";
import "./styles.scss";

export default () => {
  const selectCart = useSelector(state => state.cart);
  const cartCount = selectCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-icon">
      <div>
        {" "}
        <FaShoppingCart />{" "}
      </div>
      {cartCount > 0 && (
        <AnimatePresence exitBeforeEnter>
          <motion.span key={cartCount} {...animateCartCount}>
            {cartCount}
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
};
