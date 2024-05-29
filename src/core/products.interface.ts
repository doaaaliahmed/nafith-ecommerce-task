export interface IProducts {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRate;
  title: string;
}

export interface IRate {
  rate: number;
  count: number;
}


export interface ErrorModel{
  errorTitle : string;
  errorStatus : string | undefined;
  errorMessage : string;
  statusCode : number;
}