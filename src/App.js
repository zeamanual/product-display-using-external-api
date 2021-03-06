import ProductDetail from "./pages/product detail/product detail";
import ProductList from "./pages/product list/product list";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {CartProvider } from "./context/cart context";
import Cart from "./pages/cart/cart";
import NavBar from "./components/nav bar/nav bar";


function App() {
  return (
    <CartProvider>
      <Router>   
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<ProductList></ProductList>}/>
            <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}/>
            <Route path="/cart" element={<Cart></Cart>}/>
        </Routes>
      </Router>
    </CartProvider>

  );
}

export default App;
