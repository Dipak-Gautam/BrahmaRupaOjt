const cancelOrderData = (data, setOrderData, orderData) => {
  let tempData = orderData.filter((item) => item._id != data);
  setOrderData(tempData);
};
export default cancelOrderData;
