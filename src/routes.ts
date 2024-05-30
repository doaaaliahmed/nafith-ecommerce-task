import Home from "./pages";
import SingleProduct from "./pages/singleproduct";

export const routes = [
  { path: `/Home`, component: Home },
  { path: `/product/:id`, component: SingleProduct },
  {
    path: "/",
    exact: true,
    component: Home
  },
  { path: "*", component: Home},
  
];
