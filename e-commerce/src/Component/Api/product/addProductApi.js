import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../mainEndPoint";

const addProductApi = async (productDetail, setProductDetail) => {
  const request = await SecureFetch(
    mainEndPoint + "/product",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  if (request.status == 200) {
    alert("Product added sucessfully");
    setProductDetail({
      pName: "",
      features: [],
      price: 0,
      image: "",
      rating: 0,
      category: "",
      description: "",
    });
  } else {
    alert("something went wrong please check Name and image ");
  }
};
export default addProductApi;
