import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import Layout from "./components/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { allRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Routes>
              {allRoutes.map((m) => (
                <Route key={m.path} path={m.path} element={<m.component />} />
              ))}
            </Routes>
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
