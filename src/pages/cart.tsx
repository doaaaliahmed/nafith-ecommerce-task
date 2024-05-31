import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 md:p-10 w-full">
      <h3 className="text-xl md:text-2xl text-gray-800 font-semibold capitalize text-lg flex items-center gap-2">
        {t("shopping-cart")}
        <p className="flex items-center gap-1">
          <span>() </span>items
        </p>
      </h3>
      <div className="flex flex-col md:flex-row  items-start w-full justify-between">
        <div className="flex flex-col gap-10  py-10 md:w-3/4 max-w-3xl">
          <div className="flex flex-col items-center bg-gray-50 rounded-md ">
            <div className="w-full   md:w-1/4">
              <img
                src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                alt=""
                className="h-full object-center object-cover rounded-l-md"
              />
            </div>
            <div className="md:px-3  md:w-3/4 w-full">
              <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                category
              </p>
              <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">
                  Luxe Signature Ring
                </p>
                <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                Height: 10 inches
              </p>
              <p className="text-xs leading-3 text-gray-600 py-4">
                Color: Black
              </p>
              <p className="w-96 text-xs leading-3 text-gray-600">
                Composition: 100% calf leather
              </p>
              <div className="flex items-center justify-between pt-5 ltr:pr-8 rtl:pl-8">
                <div className="">
                  <p className="text-xs leading-3 underline text-red-500  cursor-pointer">
                    Remove
                  </p>
                </div>
                <p className="text-base font-black leading-none text-gray-800">
                  $9,000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------ */}
        <div className="md:w-1/4 w-full bg-gray-100 h-full">
          <div className="flex flex-col h-full px-4 md:px-14  justify-between">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  $10,240
                </p>
              </div>
              <button
                onClick={() => console.log("click")}
                className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
