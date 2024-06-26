import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "./Rating";
import { IRate } from "../../core/model/products.interface";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cart.slice";

type IProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: IRate;
};

const ProductCard: FC<IProps> = ({
  id,
  title,
  image,
  price,
  category,
  rating,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const viewSingleProduct = (id: number) => {
    navigate("/product/" + id);
  };

  const handleAddToCart = (id: number) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="hover:shadow-2xl transition duration-300 rounded-md">
      <div className="w-full h-52 flex items-center justify-center bg-white py-4 rounded-t-md">
        <img
          src={image}
          className="h-40 aspect-square object-contain rounded-t-md"
          alt={title}
        />
      </div>
      <div className="bg-white rounded-b-md">
        <div className="p-4 ">
          <div className="flex flex-col items-start gap-2 h-28 md:h-36 xl:h-28">
            <legend className="text-gray-700 text-xs font-semibold bg-gray-300 py-1 px-2 rounded-md">
              {category}
            </legend>
            <h2
              className="text-base font-semibold hover:underline hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => viewSingleProduct(id)}
            >
              {title}
            </h2>
          </div>

          <Rating rate={rating.rate} count={rating.count} />
          <div className="flex items-center justify-between pb-4">
            <p className="text-gray-700 text-xl font-semibold">${price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(id)}
            className="grow-0  w-full  bg-blue-600 text-gray-100 p-4 text-sm font-medium transition hover:scale-105 flex items-center justify-center gap-2 rounded-md"
          >
            <span>
              <img
                src="/shopping-cart-outline-svgrepo-com.svg"
                alt="cart-icon"
                className="w-4 h-4"
              />
            </span>
            <span>{t("add-to-cart")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
