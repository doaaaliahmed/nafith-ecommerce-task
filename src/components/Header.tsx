import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid place-items-center px-6 py-16 mx-auto min-h-screen">
      <div className="w-full items-center lg:flex">
        <div className="w-full lg:w-1/2 px-10">
          <div className="lg:max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-6xl 2xl:text-7xl">
              Find your perfect <br /> 
              <span className="text-blue-500 ">clothes</span>
            </h1>

            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>

            <Link to='/products' className=" inline-block  px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
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
