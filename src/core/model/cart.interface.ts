export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: ICartPropduct[];
}

export interface ICartPropduct {
  productId: number;
  quantity: number;
}


