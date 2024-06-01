import Home from "./pages";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleproduct";

export const allRoutes = [
  { path: `/Home`, component: Home },
  { path: `/product/:id`, component: SingleProduct },
  { path: `/cart`, component: Cart },
  {
    path: "/",
    exact: true,
    component: Home
  },
  { path: "*", component: Home},
  
];
