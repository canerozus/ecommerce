import { useState } from "react";
import Card from "./components/card";
import Header from "./components/header";
import SideBar from "./components/sideBar";
function App() {
 
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(null);
  
  return (
    <div className="flex flex-col h-full w-full m-0 p-0">
      <Header product={product} setProduct={setProduct}/>
      <div className="flex flex-row w-full h-full">
        <SideBar setFilter={setFilter}/>
        <Card product={product} setProduct={setProduct} filter={filter}/>
      </div>
    </div>
  );
}

export default App;
