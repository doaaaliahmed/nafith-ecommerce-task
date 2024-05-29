import axios from "axios";
import { IProducts } from "../products.interface";

class GetProducts {
  async getProducts(): Promise<IProducts[]> {
    const res = await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => res.data);
    return res;
  }
}

export const allProducts = new GetProducts();
