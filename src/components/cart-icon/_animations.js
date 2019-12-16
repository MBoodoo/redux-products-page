const animateCartCount = {
  variants: {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "circOut" }
    },
    exit: {
      scale: 0.6,
      y: -30,
      opacity: 0,
      transition: { duration: 0.2, ease: "circOut" }
    }
  },
  initial: "initial",
  animate: "enter",
  exit: "exit"
};

export default animateCartCount;
