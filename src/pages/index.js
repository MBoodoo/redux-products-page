import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";

import { toggleNav } from "../actions";
import { FaBars } from "react-icons/fa";

import data from "../mockData";
import Header from "../components/header";
import Nav from "../components/nav";
import Notifications from "../components/notifications";
import Product from "../components/product";
import { motion, AnimatePresence } from "framer-motion";

export default () => {
  const dispatch = useDispatch();

  const products = data.map(product => (
    <Product meta={product} key={product.name} />
  ));

  return (
    <div className="main">
      <button onClick={() => dispatch(toggleNav())}>
        <FaBars />
      </button>
      <Nav />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="product-grid"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {products}
        </motion.div>
      </AnimatePresence>
      <Notifications />
    </div>
  );
};
