import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import ProductCard from "../components/Products/ProductCard";
import { IProducts } from "../core/model/products.interface";
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "../store/getAllProducts.slice";
import { ICartPropduct } from "../core/model/cart.interface";

const Cart = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) => state.cart.cartProduct);
  const products = useAppSelector((state) => state.products.products);
  const [productTOBuy, setProductToBuy] = useState<IProducts[]>([]);

  useEffect(() => {
    dispatch(getAllProductsThunk(null));
    setProductToBuy((prev) =>
      [...products].filter((m) =>
        cartProduct.find((el: ICartPropduct) => el.productId === m.id)
      )
    );
  }, [dispatch]);

  return (
    <div className="p-4 md:p-10 w-full">
      <h3 className="text-xl md:text-2xl text-gray-800 font-semibold capitalize text-lg flex items-center gap-2">
        {t("shopping-cart")}
        <p className="flex items-center gap-1">
          <span>({cartProduct.length}) </span>items
        </p>
      </h3>
      <div className="flex flex-col md:flex-row  items-start w-full justify-between">
        <div className="mt-10 max-w-8xl grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
          {productTOBuy &&
            productTOBuy.map((m: IProducts) => (
              <ProductCard
                key={m.id}
                id={m.id}
                title={m.title}
                image={m.image}
                category={m.category}
                price={m.price}
                rating={m.rating}
              />
            ))}
        </div>

        {/* ------------------------------------------------------ */}
        <div className="md:w-1/4 w-full bg-gray-100 h-full">
          <div className="flex flex-col h-full px-4 md:px-14  justify-between">
            <div>
              <p className="text-center text-4xl font-bold leading-9 text-gray-800">
                Ordr Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
            </div>
            <div className="border-t-[1px] border-t-gray-600 mt-10">
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  $10,240
                </p>
              </div>
              <button
                onClick={() => console.log("click")}
                className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
