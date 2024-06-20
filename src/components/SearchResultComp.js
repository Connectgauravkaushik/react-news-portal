import { useSelector } from "react-redux";

// Search New Result Data
const SearchResultComp = () => {
  // Here we are subscribing to the store and getting the data using useSelector hook.
  const SearchNews = useSelector((store) => store?.NewsDataSlice?.searchResult);

  return SearchNews !== null ? (
    <>
      <div className="w-full">
        <div className="w-[60%] float-left max-lg:mt-12 max-lg:w-full max-lg:float-none">
          <div className="border rounded-md border-gray-200 p-3 mt-3 ml-56   max-lg:ml-2 max-lg:mr-14 max-lg:w-[99%] max:sm:w-[80%]">
            <h1 className="font-semibold text-3xl text-center max-sm:text-xl ">
              Search Result
            </h1>
          </div>

          {SearchNews.map((n, index) => (
            <div className="ml-56 mt-2 max-lg:ml-2 max-lg:mr-2  max-sm:max-w-fit">
              {index === 0 ? (
                <a href={n?.url}>
                  {" "}
                  <div className="border rounded-md border-gray-200 p-2 mt-3 ">
                    <div className="ml-10">
                      <h1 className="text-4xl font-bold">{n?.title}</h1>
                      <img
                        className="w-[600px] mt-6 ml-7 max-sm:flex max-sm:justify-center max-sm:w-[300px] max-sm:ml-2 max-lg:flex max-lg:justify-center max-lg:ml-10"
                        src={n?.urlToImage}
                        alt=""
                      ></img>
                      <p className="mt-3 mr-3">{n?.description}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="mt-4 border rounded-md border-gray-200 p-3 h-auto flex justify-around flex-wrap ">
                  <div className="text-center w-full">
                    <h1 className="text-xl font-semibold">{n?.title}</h1>
                  </div>
                  <div className="w-1/2 float-left mt-6">
                    <p className="">{n?.description}</p>
                  </div>
                  <div className="w-1/3 float-right mt-6">
                    <img className="w-60 mt-6" src={n?.urlToImage} alt=""></img>
                    <a href={n?.url}>
                      {" "}
                      <button className="border border-red-600 text-white bg-red-600 p-1 mt-5 float-right w-36">
                        Read More..
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="flex justify-center mt-56">
      <button
        disabled
        type="button"
        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          class="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </div>
  );
};

export default SearchResultComp;
