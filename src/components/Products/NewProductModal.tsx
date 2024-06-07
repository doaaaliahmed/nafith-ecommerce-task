import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormNewProduct } from "../../core/model/products.interface";
import ErrorMessage from "../UI/ErrorMessage";

type IProps = {
  onClose: () => void;
};

const NewProductModal: FC<IProps> = ({ onClose }) => {
  const [next, setNext] = useState<boolean>(false);
  const hiddenImageInput = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isChoosedImage, setIsChoosedImage] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormNewProduct>();


  const chooseImage = () => {
    if (hiddenImageInput.current) hiddenImageInput.current.click();
  };

  const handleUploadImage = (e: any) => {
    setIsChoosedImage(true);
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  const chooseAnotherImage = () => {
    setIsChoosedImage(false);
    setImageSrc(null);
  };

  const onSubmit = (e: any) => {};

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
              className="text-xl sm:text-2xl  font-medium leading-6 text-gray-800 capitalize "
              id="modal-title"
            >
              Add New Product
            </h3>

            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              {!next ? (
                <div className="flex flex-col gap-6 w-full">
                  <div>
                    <input
                      type="text"
                      id="title"
                      placeholder="Product Name"
                      {...register("title", { required: "you must add title" })}
                      className="block w-full px-4 py-3 text-lg text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                    {errors.title && (
                      <ErrorMessage text={errors.title.message as string} />
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      id="category"
                      placeholder="Product Category"
                      {...register("category", {
                        required: "you must add category",
                      })}
                      className="block w-full px-4 py-3 text-lg text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                    {errors.category && (
                      <ErrorMessage text={errors.category.message as string} />
                    )}
                  </div>

                  <div className="relative rounded-md overflow-hidden">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 w-10 border-l-rounded-md">
                      $
                    </span>
                    <input
                      type="number"
                      className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      placeholder="price"
                      {...register("price", { required: "you must add price" })}
                    />
                    {errors.price && (
                      <ErrorMessage text={errors.price.message as string} />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setNext(true)}
                    disabled={ !(getValues("title") !== "" && getValues("category") !== "" && getValues("price") !== 0)}
                    className={`
                        bg-blue-600 hover:bg-blue-500  self-end w-1/3 px-4  py-3 mt-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md   focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div>
                  <div className="w-full h-80 border-dashed border-2 border-gray-300 rounded-md relative">
                    {!isChoosedImage ? (
                      <>
                        <input
                          ref={hiddenImageInput}
                          type="file"
                          accept="image/png, image/jpeg"
                          onChange={handleUploadImage}
                          hidden
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 flex-col">
                          <button
                            onClick={chooseImage}
                            className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-md"
                          >
                            Browse Image
                          </button>
                          <p className="text-gray-800 font-medium text-lg">
                            Upload Product Image
                          </p>
                        </div>
                      </>
                    ) : (
                      <div>
                        <img
                          src={imageSrc as string}
                          alt="title"
                          className="my-4 mx-auto h-64 object-contain"
                        />
                        <button
                          onClick={chooseAnotherImage}
                          className="absolute -top-4 -right-4 px-4 py-2 text-lg font-medium tracking-wide text-gray-100 capitalize transition-colors duration-300 transform border  bg-blue-600 rounded-md sm:mx-2  focus:outline-none hover:bg-blue-400"
                        >
                          change
                        </button>
                      </div>
                    )}
                  </div>
                  {!isChoosedImage && (
                    <ErrorMessage text="you must select image" />
                  )}
                  <div>
                    <textarea
                      className="block w-full h-28 px-5 py-2.5 my-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Descreption"
                      {...register("description", {
                        required: "you must add description",
                      })}
                    ></textarea>
                    {errors.description && (
                      <ErrorMessage
                        text={errors.description.message as string}
                      />
                    )}
                  </div>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setNext(false)}
                      className="w-full px-4 py-2 text-lg font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2  hover:bg-gray-100 focus:outline-none"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full px-4 py-2 text-lg font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2  hover:bg-gray-100 focus:outline-none"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-lg font-medium tracking-wide text-gray-100 capitalize transition-colors duration-300 transform border  bg-blue-600 rounded-md sm:w-1/2 sm:mx-2  focus:outline-none hover:bg-blue-400"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductModal;
