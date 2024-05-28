import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";

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

const Products = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  useEffect(() => {
    const getProductsList = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`).then((res) =>
        res.json()
      );
      console.log(res);
      setProducts(res);
    };

    getProductsList();
  }, []);

  const handleFilterBar = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="">
      <SideBar open={openFilter}/>
      <div className="pl-[24rem]">
        <button
          type="button"
          onClick={handleFilterBar}
          className="inline-flex items-center gap-2 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
          <span role="sr-only" className="text-xl">
            Filter
          </span>
        </button>
        <div className="flex flex-wrap items-center justify-center gap-10 px-4 ms:px-10 py-20">
          {products.map((m) => (
            <ProductCard
              key={m.id}
              id={m.id}
              title={m.title}
              image={m.image}
              category={m.category}
              description={m.description}
              price={m.price}
              rating={m.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
