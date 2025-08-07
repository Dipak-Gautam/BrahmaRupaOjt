import React, { useEffect } from "react";
import getOrderApi from "../../Api/order/getOrderApi";
import OrderCard from "./OrderCard";

const Order = ({ orderData }) => {
  console.log("orderData", orderData);
  return (
    <div className=" p-2 md:p-4 flex flex-wrap gap-3 md:gap-10">
      {orderData.map((item) => (
        <OrderCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default Order;
