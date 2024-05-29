import { useEffect, useState } from "react";

const SideBar = ({ open }: { open: boolean }) => {
  // !open ? "-translate-x-full" : "-translate-x-01"
  const [viewCategories, setViewCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/categories`
      ).then((res) => res.json());
     setCategories(res);
     console.log(res)
    };

    getAllCategories();
  }, []);

  const handleViewCategories = () => {
    setViewCategories(!viewCategories);
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-gray-50 `}
        aria-label="Sidebar"
      >
        <div className="h-full w-96 px-3 py-4 overflow-y-auto ">
          <ul className="w-full space-y-2 font-medium">
            <li className="w-full">
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                onClick={handleViewCategories}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Categories
                </span>
                <svg
                  className={`w-3 h-3 ${viewCategories ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {viewCategories && categories ? (
                <ul
                  id="dropdown-example"
                  className={`${
                    !viewCategories ? "hidden" : ""
                  } py-2 space-y-2`}
                >
                  {categories.map(m=> 
                  <li className="w-full">
                    <a
                      href="/"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                     { m}
                    </a>
                  </li>
                  )}
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
