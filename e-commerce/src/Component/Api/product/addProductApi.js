import mainEndPoint from "../mainEndPoint";
const addProductApi = async (
  productDetail,
  setProductDetail,
  imageFile,
  setLoading
) => {
  console.log("image file from api", imageFile);
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("productDetail", JSON.stringify(productDetail));

  const request = await fetch(mainEndPoint + "/product", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

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
  setLoading(false);
};
export default addProductApi;
