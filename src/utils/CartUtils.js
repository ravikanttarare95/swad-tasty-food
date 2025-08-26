export const updateCart = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const handleQuantityMinus = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCart = cart
    .map((addedItem) => {
      return addedItem.id === id
        ? { ...addedItem, quantity: addedItem.quantity - 1 }
        : addedItem;
    })
    .filter((addedItem) => addedItem.quantity > 0);
  return updateCart(updatedCart);
};

export const handleQuantityPlus = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCart = cart.map((addedItem) => {
    return addedItem.id === id
      ? { ...addedItem, quantity: addedItem.quantity + 1 }
      : addedItem;
  });

  return updateCart(updatedCart);
};
