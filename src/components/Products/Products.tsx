import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IProducts } from "../../core/products.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getAllProductsThunk,
  handleFilterBySearch,
} from "../../store/getAllProducts.slice";
import { useTranslation } from "react-i18next";
import useDeviceSize from "../../hooks/useWindowSize";
import FilterSidebar from "./FilerSideBar";

const Products = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const search = useAppSelector((state) => state.products.foundedProducts);
  const filterd = useAppSelector((state) => state.products.filteredProducts);
  const loading = useAppSelector((state) => state.products.loading);
  const [filterdProducts, setFilterdProducts] = useState<IProducts[]>([]);
  const isMobileView = useDeviceSize(1024);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);

  const handleSearchProducts = (e: any) => {
    dispatch(handleFilterBySearch(e.target.value));
  };

  useEffect(() => {
    dispatch(getAllProductsThunk(null));
  }, [dispatch]);

  useEffect(() => {
    filterd
      ? setFilterdProducts(filterd)
      : search
      ? setFilterdProducts(search)
      : setFilterdProducts(products);
  }, [filterd, search, products]);

  useEffect(() => {
    console.log(isMobileView);
  }, [isMobileView]);

  return (
    <div className="flex items-stretch h-full w-full">
      <FilterSidebar open={openSidebar} />
      <div className="px-10 grow" id="products">
        <div className=" py-8 flex items-center justify-between">
          {!isMobileView ? (
            <button
              type="button"
              onClick={handleOpenSidebar}
              className="inline-flex items-center gap-2 px-4 py-1  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <svg
                enableBackground="new 0 0 36 30"
                height="18px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 36 30"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  stroke="#231F20"
                  strokeWidth="2px"
                  fill="white"
                  points="14,30 22,25 22,17 35.999,0 17.988,0 0,0 14,17 "
                />
              </svg>
              <span className="text-xl"> {t("filter")}</span>
            </button>
          ) : (
            <h3 className="text-gray-800 font-semibold text-lg">Products List <span>({filterdProducts?.length})</span></h3>
          )}

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
              placeholder={t("search")}
              onChange={handleSearchProducts}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-1  text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="text-xl"> {t("sort")}</span>

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

        <div className="pb-20 flex flex-wrap items-start justify-start gap-6 w-full  h-full overflow-y-auto">
          {filterdProducts &&
            filterdProducts.map((m: IProducts) => (
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
      </div>
    </div>
  );
};

export default Products;
