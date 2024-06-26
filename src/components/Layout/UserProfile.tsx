import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleChangeLanguage } from "../../store/language.slice";
import { useTranslation } from "react-i18next";

const UserProfile = () => {
  const { t } = useTranslation();
  const dir = useAppSelector((state) => state.language.dir);
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const dispatch = useAppDispatch();

  const handleOpenLanguage = () => setIsOpenLang(!isOpenLang);

  const handleChangeLang = (lang: string) => {
    dispatch(handleChangeLanguage(lang));
    setIsOpenLang(false);
  };

  useEffect(()=>{
    
  })

  return (
    <div className="relative  flex items-center gap-4 mx-4">
      <button
        type="button"
        className="flex items-center focus:outline-none relattive"
        aria-label="toggle profile dropdown"
        onClick={handleOpenLanguage}
      >
        <div className="w-10 h-10  rounded-full grid place-items-center">
          <img
            src="/language-svgrepo-com.svg"
            className="object-cover w-6 h-6"
            alt="avatar"
          />
        </div>
      </button>
      {isOpenLang && (
        <div
          className={`absolute top-1/2 ${
            dir === "ltr" ? "right-3/4" : "left-3/4"
          } z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
          id="user-dropdown"
          onMouseLeave={() => setIsOpenLang(false)}
        >
          <ul className="py-2 w-32" aria-labelledby="user-menu-button">
            <li>
              <button
                onClick={() => handleChangeLang(`ar`)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {t("arabic")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleChangeLang(`en`)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {t("english")}
              </button>
            </li>
          </ul>
        </div>
      )}

      <Link
        to="/cart"
        className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 "
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {totalQuantity !== 0 && <span className="absolute -top-1 -left-1 text-xs bg-blue-600 z-40 w-5 h-5 text-xs text-white rounded-full grid place-items-center">
          {totalQuantity}
        </span>}
      </Link>
    </div>
  );
};

export default UserProfile;
