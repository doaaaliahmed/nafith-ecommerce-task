import axios from "axios";

class GetCategories {
  async getCategories(): Promise<string[]> {
    const res = await axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.data);
    return res;
  }
}

export const allCategories = new GetCategories();
