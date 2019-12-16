import React from "react";
import uuid from "uuid";
import { memoAddToCart, memoRemoveFromCart } from "../utils";

const init = {
  cart: [],
  notifications: [],
  isNavOpen: false
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: memoAddToCart(state, action.payload),
        notifications: [
          ...state.notifications,
          {
            event: "ADDED",
            name: action.payload.name,
            id: uuid(),
            quantity: action.payload.quantity
          }
        ]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: memoRemoveFromCart(state, action.payload),
        notifications: [
          ...state.notifications,
          {
            event: "REMOVED",
            name: action.payload.name,
            quantity: action.payload.quantity,
            id: uuid()
          }
        ]
      };
    case "TOGGLE_NAV":
      return {
        ...state,
        isNavOpen: !state.isNavOpen
      };
    case "CLEAR_NOTIFICATION":
      console.log(state.notifications);
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(({ id }) => id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
};

// make notification and product interfaces for consistent
// identifier properties
