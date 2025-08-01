import { useEffect, useState } from "react";
import Categories from "./Component/Categories/Categories";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import productDataApi from "./Component/Api/productData.api";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/auth");
  }

  const [mainData, setMainData] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    productDataApi(setMainData, setProductData);
  }, []);
  return (
    <div className="p-2 px-5">
      <NavBar />
      <HeroSection />
      <Categories setProductData={setProductData} mainData={mainData} />
      <Product productData={productData} />
    </div>
  );
}

export default App;
