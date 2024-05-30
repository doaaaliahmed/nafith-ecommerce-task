import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "./Rating";
import { IRate } from "../core/products.interface";
import { useAppDispatch } from "../store/hooks";
import { getSingleProductsThunk } from "../store/getAllProducts.slice";

type IProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: IRate;
};

const ProductCard: FC<IProps> = ({
  id,
  title,
  description,
  image,
  price,
  category,
  rating,
}) => {
  const navigate = useNavigate();
 


  const viewSingleProduct = (id: number) => {
     navigate("/product/" + id)
  };

  return (
    <div className="mx-2 w-80 lg:mb-0 mb-8 hover:shadow-2xl transition duration-300">
      <div className="   w-full h-53 flex items-center justify-center bg-white py-4">
        <img
          src={image}
          className="h-40 aspect-square object-contain"
          alt={title}
        />
      </div>
      <div className="bg-white">
        <div className="p-4 ">
          <div className="flex flex-col items-start gap-4 h-36">
            <legend className="text-gray-700 text-xs font-semibold bg-gray-300 py-1 px-2 rounded-md">
              {category}
            </legend>
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          {/* <p className="text-xs text-gray-600 mt-2">{description}</p> */}
          <Rating rate={rating.rate} count={rating.count} />
          <div className="flex items-center justify-between py-4">
            <h3 className="text-indigo-700 text-xl font-semibold">${price}</h3>
          </div>
          <button
            className="grow-0  w-full  bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            onClick={() => viewSingleProduct(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
