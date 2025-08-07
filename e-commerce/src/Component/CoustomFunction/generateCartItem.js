const generateCartItem = (cartData) => {
  const tempArray = [];
  cartData.map((item) => {
    tempArray.push({ itemName: item.pName, quantity: item.quantity });
  });
  return tempArray;
};
export default generateCartItem;
