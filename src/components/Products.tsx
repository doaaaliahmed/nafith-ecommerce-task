import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import SideBar from "../components/SideBar";
import { IProducts } from "../core/products.interface";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getAllProductsThunk,
  handleSearch,
} from "../store/getAllProducts.slice";

const Products = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const search = useAppSelector((state) => state.products.productsSearch);
  const loading = useAppSelector((state) => state.products.loading);
  const [filterdProducts, setFilterdProducts] = useState<IProducts[]>([]);

  const handleFilterBar = () => setOpenFilter(!openFilter);

  const handleSearchProducts = (e: any) =>
    dispatch(handleSearch(e.target.value));

  useEffect(() => {
    dispatch(getAllProductsThunk(null));
  }, [dispatch]);

  useEffect(() => {
    search ? setFilterdProducts(search) : setFilterdProducts(products);
  }, [search, products]);

  return (
    <div className="py-8" id="products">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleFilterBar}
          className="inline-flex items-center gap-2 px-4 py-1  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <svg
            enable-background="new 0 0 36 30"
            height="18px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 36 30"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              stroke="#231F20"
              stroke-width="2px"
              fill="white"
              points="14,30 22,25 22,17 35.999,0 17.988,0 0,0 14,17 "
            />
          </svg>
          <span className="text-xl"> Filter</span>
        </button>

        <div className="relative mt-4 md:mt-0 max-w-2xl w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Search"
            onChange={handleSearchProducts}
          />
        </div>

        <button
          type="button"
          onClick={handleFilterBar}
          className="inline-flex items-center gap-2 px-4 py-1  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
           <span className="text-xl"> sort</span>

          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z" />
          </svg>
         
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 py-20">
        {filterdProducts &&
          filterdProducts.map((m: IProducts) => (
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
  );
};

export default Products;
