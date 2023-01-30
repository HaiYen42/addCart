import Product from "./Component/Products";
import { Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";
import Layout from "./Component/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/products" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
