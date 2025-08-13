const cancelOrderData = (data, setOrderData, orderData) => {
  let tempData = orderData.filter((item) => item._id != data);
  console.log("tempdata", tempData);
  setOrderData(tempData);
};
export default cancelOrderData;
