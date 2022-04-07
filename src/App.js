import { useState, useEffect } from "react";
import Card from "./components/card";
import Header from "./components/header";
import SideBar from "./components/sideBar";
function App() {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(null);
  const [basket, setBasket] = useState([]);
  const [open, setOpen] = useState(false);

  const onAdd = (_, productData) => {
    const exist = basket.find(x => x.id === productData.id);
    if (exist) {
      setBasket(basket.map(x => x.id === productData.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setBasket([...basket, { ...productData, qty: 1 }])
    }
  }
  const onRemove = (_, productData) => {
    const exist = basket.find(x => x.id === productData.id);
    if(exist.qty == 1){
      setBasket(basket.filter(x => x.id !== productData.id))
    }else{
      setBasket(basket.map(x => x.id === productData.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  useEffect(() => {
    if (search.length > 0) {
      setFilter(null)
    }
    if (search.length <= 1) {
      setSearch("")
    }

  }, [search])

  return (
    <div className="flex flex-col h-full w-full m-0 p-0">
      <Header product={product} setProduct={setProduct} open={open} setOpen={setOpen} basket={basket} setBasket={setBasket} onAdd={onAdd} setSearch={setSearch} search={search} onRemove={onRemove}/>
      <div className="flex flex-row w-full h-full">
        <SideBar setFilter={setFilter} product={product} />
        <Card product={product} setProduct={setProduct} filter={filter} basket={basket} setBasket={setBasket} onAdd={onAdd} search={search} />
      </div>
    </div>
  );
}

export default App;
