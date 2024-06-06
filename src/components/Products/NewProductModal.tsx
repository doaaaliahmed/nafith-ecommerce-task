import { FC } from "react";
import { useForm } from "react-hook-form";
import { IFormNewProduct } from "../../core/model/products.interface";

type IProps = {
  onClose: () => void;
};

const NewProductModal: FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormNewProduct>();

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <div className="fixed z-[9999] w-screen h-screen bg-gray-900/50 top-0 left-0 backdrop-blur-sm"></div>
      <div
        className="absolute z-[99999] inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle">
            <h3
              className="text-xl font-medium leading-6 text-gray-800 capitalize "
              id="modal-title"
            >
              Add New Product
            </h3>

            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row items-stretch gap-4 w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-2">
                  <div className="w-full h-44 bg-gray-300 rounded-md ">
                    <input type='file' accept="image/png, image/jpeg" className='w-full h-full opacity-0'/>
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Product Name"
                    {...register("title", { required: true })}
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between ">
                  <input
                    type="text"
                    id="category"
                    placeholder="Product Category"
                    {...register("category", { required: true })}
                    className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  />

                  <textarea
                    className="block w-full h-28 px-5 py-2.5 my-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="descreption"
                    {...register("description", { required: true })}
                  ></textarea>

                  <div className="relative rounded-md overflow-hidden">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 w-10 border-l-rounded-md">
                      $
                    </span>

                    <input
                      type="number"
                      className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      placeholder="price"
                      {...register("price", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductModal;
