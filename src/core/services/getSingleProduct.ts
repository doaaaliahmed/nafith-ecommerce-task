import axios from "axios";
import { IProducts } from "../products.interface";

class GetSingleProduct {
  async getSingleProduct(id: number): Promise<IProducts> {
    const res = await await axios(
      `https://fakestoreapi.com/products/${id}`
    ).then((res) => res.data);
    return res
  }
}

export const singleProduct = new GetSingleProduct();
