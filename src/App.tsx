import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import Products from './pages/products'
import SingleProduct from "./pages/singleproduct";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  return (

    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path='/products' element={<Products/>} />
         <Route path='/product/:id' element={<SingleProduct/>} />
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
