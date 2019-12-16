import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { motion, useInvertedScale } from "framer-motion";
import animateNav from "./_animations";
import "./styles.scss";

export default () => {
  const selectIsNavOpen = useSelector(state => state.isNavOpen);

  return (
    <motion.nav animate={selectIsNavOpen ? "open" : "closed"} {...animateNav}>
      <CheckOut />
    </motion.nav>
  );
};

const CheckOut = () => {
  const { scaleX } = useInvertedScale();

  return (
    <motion.div layoutTransition style={{ scaleX }}>
      <Link href="/checkout">
        <a>Check Out</a>
      </Link>
    </motion.div>
  );
};
