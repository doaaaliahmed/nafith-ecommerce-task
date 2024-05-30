import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid place-items-center py-10 sm:py-16 mx-auto sm:min-h-screen">
      <div className="w-full items-center lg:flex">
        <div className="w-full lg:w-1/2 px-10">
          <div className="lg:max-w-xl">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-6xl 2xl:text-9xl">
              Find your perfect <br /> 
              <span className="text-blue-500 ">clothes</span>
            </h1>

            {/* <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p> */}

            <Link to='/products' className=" inline-block  px-5 py-2 mt-10 text-xl xl:text-3xl tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-800  lg:w-auto hover:bg-gray-100 hover:text-gray-800  focus:outline-none border-[1px] hover:border-gray-800">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-4xl object-cover"
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
