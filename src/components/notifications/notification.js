import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import animateNotification from "./_animations";
import { removeFromCart, clearNotification } from "../../actions";

export default ({ meta }) => {
  const dispatch = useDispatch();
  const { name, quantity, event, id } = meta;

  const handleUndo = () => {
    dispatch(clearNotification({ id }));
    dispatch(removeFromCart({ ...meta, quantity }));
  };

  // self destruct ->
  useLayoutEffect(() => {
    let timeout = setTimeout(() => {
      dispatch(clearNotification({ id }));

      return () => clearTimeout(timeout);
    }, 4500);
  }, [id]);

  const undoBtn = <button onClick={handleUndo}>UNDO</button>;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={id} {...animateNotification}>
        {event === "ADDED" ? (
          <>
            <div>
              You have successfully added {`${quantity} ${name}`}(s) to your
              cart
            </div>
            {undoBtn}
          </>
        ) : event === "REMOVED" ? (
          <div>
            You have successfully removed {`${quantity} ${name}`}(s) from your
            cart
          </div>
        ) : null}
        <button onClick={() => dispatch(clearNotification({ id }))}>x</button>
      </motion.div>
    </AnimatePresence>
  );
};
