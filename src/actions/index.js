export const addToCart = payload => {
  return {
    type: "ADD_TO_CART",
    payload
  };
};

export const removeFromCart = payload => {
  return {
    type: "REMOVE_FROM_CART",
    payload
  };
};

export const clearNotification = payload => {
  return {
    type: "CLEAR_NOTIFICATION",
    payload
  };
};

export const toggleNav = () => {
  return {
    type: "TOGGLE_NAV"
  };
};
