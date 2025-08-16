import OrderCard from "./OrderCard";

const Order = ({ orderData, setOrderData }) => {
  return (
    <div className=" p-2 md:p-4 flex flex-wrap gap-3 md:gap-10 overflow-auto justify-center w-full">
      {orderData.map((item) => (
        <OrderCard
          key={item._id}
          data={item}
          setOrderData={setOrderData}
          orderData={orderData}
        />
      ))}
    </div>
  );
};

export default Order;
