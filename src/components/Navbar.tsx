import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b-[1px] border-gray-900 mx-4">
      <div className="container px-6 md:px-10 py-3 mx-auto lg:flex">
        <div className="flex items-center justify-between">
          <Link to="/">
            <p className="font-bold text-gray-800 text-lg">LOGO</p>
          </Link>

          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden">
          <UserProfile/>
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
       
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`${
            open
              ? "translate-x-0 opacity-100 h-screen"
              : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 lg:p-0 lg:top-0 lg:relative lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
        >
          <div className="flex flex-col px-2 -mx-4 lg:flex-row lg:mx-10 lg:py-0">
            <Link
              to="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2"
            >
              Home
            </Link>
            <Link
              to="#"
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2"
            >
              Products
            </Link>
          </div>

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
            />
          </div>

          <div className="relative mt-4 md:mt-0 flex items-center gap-10">
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const UserProfile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenUserDropDown, setIsOpenUserDropDown] = useState(false);

  return (
    <div className="relative  flex items-center gap-4 mx-4">
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
        <div>
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
              className={`absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
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
