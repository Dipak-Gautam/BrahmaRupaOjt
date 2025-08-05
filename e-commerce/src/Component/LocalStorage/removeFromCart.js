const removeFromCart = (data, setCartData) => {
  const cartData = localStorage.getItem("cart1");
  const actualData = JSON.parse(cartData);
  const updatedData = actualData.filter((item) => item._id != data._id);
  localStorage.setItem("cart1", JSON.stringify(updatedData));
  setCartData(updatedData);
};
export default removeFromCart;
