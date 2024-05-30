import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import SingleProduct from "./pages/singleproduct";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { routes } from "./routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
