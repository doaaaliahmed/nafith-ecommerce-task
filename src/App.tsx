import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import SingleProduct from "./pages/singleproduct";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import Layout from "./components/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";


function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
