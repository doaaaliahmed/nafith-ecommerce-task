import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCategoriesThunk,
  handleFilterByCategories,
  handleFilterByRating,
  handleFilterClear,
} from "../../store/getAllProducts.slice";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FilterSidebar = ({
  additionalClass,
  onClose,
}: {
  open: boolean;
  additionalClass: string;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
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
        className={`${additionalClass} ease-in-out transition-all duration-500 flex justify-start items-start  bg-gray-100 shadow flex-col gap-4 pt-6`}
        aria-label="sidebar"
      >
        <div className="lg:hidden flex rtl:flex-reverse  items-center justify-between py-4 px-2 w-full border-b-[0.5px] border-b-gray-400">
          <Link to="/">
            <p className="font-bold text-gray-800 text-lg">LOGO</p>
          </Link>
          <button
            onClick={onClose}
            className=" text-xl font-bold  text-gray-800  "
          >
            x
          </button>
        </div>
        <div
          className={`w-80  px-3 py-4 overflow-y-auto flex flex-col justify-between h-full pb-20`}
        >
          <ul className="w-full space-y-2 font-medium">
            <li className="w-full">
              <p className="flex items-center">
                <span className="text-gray-800 flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  {t("categories")}
                </span>
              </p>

              <ul id="dropdown-categories" className={`py-2 space-y-2`}>
                {categories?.map((m: string) => (
                  <li className="w-full" key={m}>
                    <button
                      onClick={() => handleFilterProductsByCategory(m)}
                      className="flex items-center w-full p-2 text-gray-600 transition duration-75 rounded-lg ltr:pl-11 rtl:pr-11 group hover:bg-gray-100"
                    >
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            <li className="w-full">
              <p className="flex items-center">
                <span className="text-gray-800 flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  {t("rating")}
                </span>
              </p>

              <ul id="default-radio" className={``}>
                {[4.5, 4, 3.5, 3].map((m, idx) => (
                  <li
                    key={`default-radio-${idx}`}
                    className="flex items-center py-2  ltr:pl-11 rtl:pr-11"
                  >
                    <input
                      id={`default-radio-${idx}`}
                      type="radio"
                      value={m}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                      onChange={handlefilterByRatingRating}
                    />
                    <label
                      htmlFor={`default-radio-${idx}`}
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      <Rating rate={m} />
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <button
            onClick={() => dispatch(handleFilterClear())}
            className="grow-0  w-full border-2  border-blue-600 text-blue-600 py-1 text-base font-medium transition hover:scale-105 flex items-center justify-center gap-2 rounded-md"
          >
            <span>{t("clear-filter")}</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
