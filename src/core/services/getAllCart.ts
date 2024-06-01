import axios from "axios";

class GetUserCart {
  async getUserCart(): Promise<string[]> {
    const res = await axios
      .get(`https://fakestoreapi.com/carts/user/2`)
      .then((res) => res.data);
    return res;
  }
}

export const carts = new GetUserCart();
