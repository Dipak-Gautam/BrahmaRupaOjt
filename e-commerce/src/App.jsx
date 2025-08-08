import { useEffect, useState } from "react";
import Categories from "./Component/Categories/Categories";
import HeroSection from "./Component/HeroSection/HeroSection";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import { useOutletContext } from "react-router";

function App() {
  const mainData = useOutletContext();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setProductData(mainData);
  }, [mainData]);
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
