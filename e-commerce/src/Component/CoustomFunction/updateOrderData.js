const updateOrderData = (data, setOrderData, orderData) => {
  let tempData = orderData.map((item) => (item._id == data._id ? data : item));
  setOrderData(tempData);
};
export default updateOrderData;
