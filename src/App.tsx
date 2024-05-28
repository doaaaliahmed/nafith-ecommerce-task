import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import Products from './pages/products'
import SingleProduct from "./pages/singleproduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {/* <Route path='/about' element={<About/>} /> */}
         <Route path='/products' element={<Products/>} />
         <Route path='/product/:id' element={<SingleProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
