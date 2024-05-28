import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { IProducts } from "./products";
import Rating from "../components/Rating";

const SingleProduct = () => {
  const [product, setProduct] = useState<IProducts | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (res) => res.json()
      );
      setProduct(res);
    };

    getSingleProduct();
  }, [id]);

  return (
    <>
      {product && 
        <div>
          <div className="mx-2 lg:mb-0 mb-8  flex flex-col lg:flex-row items-center ">
            <div className="w-full lg:w-1/2 max-w-xl flex items-center justify-center bg-white  py-4">
              <img
                src={product.image}
                className="w-full aspect-square object-contain"
                alt={product.title}
              />
            </div>
            <div className="w-full lg:w-1/2 bg-white mx-10">
              <div className="p-4 ">
                <div className="flex flex-col items-start gap-4 my-10">
                  <legend className="text-gray-700 text-xs font-semibold bg-gray-300 py-1 px-2 rounded-md">
                    {product.category}
                  </legend>
                  <h2 className="text-lg font-semibold md:text-3xl xl:text-5xl">{product.title}</h2>
                </div>
                <p className="my-10 text-xl xl:text-2xl font-semibold text-gray-600 mt-2">{product.description}</p>
                <Rating
                  rate={product.rating.rate}
                  count={product.rating.count}
                />
                <div className="flex items-center justify-between py-4">
                  <h3 className="text-indigo-700 text-xl font-semibold">
                    ${product.price}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SingleProduct;
