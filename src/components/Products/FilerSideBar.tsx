import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCategoriesThunk,
  handleFilterByCategories,
  handleFilterByRating,
} from "../../store/getAllProducts.slice";
import Rating from "./Rating";

const FilterSidebar = ({ open }: { open: boolean }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.allCategories);

  const handlefilterByRatingRating = (e: any) => {
    dispatch(handleFilterByRating(+e.target.value));
  };

  const handleFilterProductsByCategory = (e: string) => {
    dispatch(handleFilterByCategories(e));
  };

  useEffect(() => {
    dispatch(getCategoriesThunk(null));
  }, []);

  return (
    <>
      <aside
        className={`ease-in-out transition-all duration-500 flex justify-start items-start  bg-gray-100 shadow flex-col gap-4 pt-6`}
        aria-label="sidebar"
      >
        <div className={`w-80  px-3 py-4 overflow-y-auto flex flex-col justify-between h-full pb-20`}>
          <ul className="w-full space-y-2 font-medium">
            <li className="w-full">
              <p className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-800 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="text-gray-800 flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Categories
                </span>
              </p>

              <ul id="dropdown-categories" className={`py-2 space-y-2`}>
                {categories?.map((m: string) => (
                  <li className="w-full" key={m}>
                    <button
                      onClick={() => handleFilterProductsByCategory(m)}
                      className="flex items-center w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            <li className="w-full">
              <p className="flex items-center">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-800 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="text-gray-800 flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Ratings
                </span>
              </p>

              <ul id="dropdown-example" className={``}>
                {[5, 4, 3, 2].map((m, idx) => (
                  <li
                    key={Math.random() * idx + 200}
                    className="flex items-center pl-11 py-2"
                  >
                    <input
                      id={`rate-${m}`}
                      type="radio"
                      value={m}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      onChange={handlefilterByRatingRating}
                    />
                    <label
                      htmlFor={`rate-${m}`}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <Rating rate={m} />
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <button className="grow-0  w-full border-2  border-blue-600 text-blue-600 p-4 text-lg font-medium transition hover:scale-105 flex items-center justify-center gap-2 rounded-md">
            <span>clear filter</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
