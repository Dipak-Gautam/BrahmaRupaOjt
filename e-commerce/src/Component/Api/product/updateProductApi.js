import SecureFetch from "../Auth/ApiConfiguration";

const updateProductApi = async (productDetail) => {
  const request = await SecureFetch(
    "http://localhost:3000/product",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  const response = await request.json();
  console.log("response", response);
  if (request.status == 200) {
    alert("product updated sucessfully");
  } else {
    alert("something went wrong");
  }
};
export default updateProductApi;
