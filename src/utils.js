/* 
makeshift memo util functions in place for immer.js
in order to avoid memory leaks in state
*/
export const memoAddToCart = (state, payload) => {
  const { cart } = state;
  const existsInCart =
    cart.findIndex(product => product.name === payload.name) !== -1;

  return existsInCart
    ? cart.map(product => {
        if (product.name === payload.name) product.quantity += payload.quantity;
        return product;
      })
    : [...cart, payload];
};

export const memoRemoveFromCart = (state, payload) => {
  const { cart } = state;
  const idx = cart.findIndex(product => product.name === payload.name);
  const shouldRemoveProduct =
    idx !== -1 ? cart[idx].quantity === payload.quantity : false;

  return shouldRemoveProduct
    ? cart.filter(({ name }) => name !== payload.name)
    : cart.map(product => {
        if (product.name === payload.name) product.quantity -= payload.quantity;
        return product;
      });
};

export const reduceTotalPrice = cart => {
  return cart.reduce((total, product) => 
  (total += product.price * product.quantity)
  ,0);
};
