const productDataApi = async (setMainData, setProductDta) => {
  const request = await fetch("http://localhost:3000/product");
  const response = await request.json();
  if (request.status == 200) {
    setMainData(response.data);
    setProductDta(response.data);
  }
};
export default productDataApi;
