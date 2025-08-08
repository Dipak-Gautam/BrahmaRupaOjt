import mainEndPoint from "./mainEndPoint";

const productDataApi = async (setMainData) => {
  const request = await fetch(mainEndPoint + "/product");
  const response = await request.json();
  if (request.status == 200) {
    setMainData(response.data);
  } else {
    setMainData([]);
  }
};
export default productDataApi;
