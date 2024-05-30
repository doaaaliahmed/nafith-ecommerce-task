import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenUserDropDown, setIsOpenUserDropDown] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");


  const handleOpenLanguage = () => setIsOpenLang(!isOpenLang);

  return (
    <div className="relative  flex items-center gap-4 mx-4">
      <button
        type="button"
        className="flex items-center focus:outline-none relattive"
        aria-label="toggle profile dropdown"
        onClick={handleOpenLanguage}
      >
        <div className="w-8 h-8  rounded-full grid place-items-center">
          <img
            src="/language-svgrepo-com.svg"
            className="object-cover w-6 h-6"
            alt="avatar"
          />
        </div>
      </button>
      {isOpenLang && (
            <div
              className={`absolute top-1/2 right-3/4 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="user-dropdown"
            >
             
              <ul className="py-2 w-32" aria-labelledby="user-menu-button">
                <li>
                  <button
                    onClick={() => setLanguage(`ar`)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Arabic
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLanguage(`en`)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    English
                  </button>
                </li>
              </ul>
            </div>
          )}

      <Link
        to="#"
        className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 "
      >
        <svg
          className="w-6 h-6"
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

        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
      </Link>

      {isLogin ? (
        <div className="relative">
          <button
            type="button"
            className="flex items-center focus:outline-none relattive"
            aria-label="toggle profile dropdown"
            onClick={() => setIsOpenUserDropDown(!isOpenUserDropDown)}
          >
            <div className="w-8 h-8  bg-gray-300 rounded-full grid place-items-center">
              <img
                src="/avatar-default-svgrepo-com.svg"
                className="object-cover w-6 h-6"
                alt="avatar"
              />
            </div>
          </button>
          {isOpenUserDropDown && (
            <div
              className={`absolute top-1/2 right-3/4 w-48 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 ">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="px-2.5 py-1 font-normal text-white bg-gray-500  rounded-lg  focus:outline-none"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserProfile;
