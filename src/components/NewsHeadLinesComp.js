import { useSelector } from "react-redux";

const NewsHeadLinesComp = () => {

    // Here we are subscribing to the store and getting the data using useSelector hook.
  const NewsHeadlineData = useSelector(
    (store) => store?.NewsDataSlice?.newsHeadlines
  );
  
  // if NewsHeadlineData is null simply return it back.
  if (NewsHeadlineData === null) {
    return;
  }

  return (
    <>
      <div>
        <div className="border rounded-md border-gray-200 p-3 mt-3 mr-56 ml-4 max-lg:w-[99%] max-lg:ml-2 max-lg:mr-1 max-sm:w-[95%] max-sm:mr-3 ">
          <h1 className="font-semibold text-3xl text-center ">Latest News</h1>
        </div>

        <div>
          <div className="border border-gray-200 h-auto mt-3 mr-56 ml-4 max-lg:mr-2 max-sm:ml-2 rounded-md max-sm:max-w-fit">
            {NewsHeadlineData.map((h, index) => (
              <a href={h?.url}>
                <div
                  key={index}
                  className="mt-2 h-auto p-2 text-center cursor-pointer "
                >
                  <div className="w-full">
                    <h3 className="font-semibold text-base">{h?.title}</h3>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-center mt-4">
                      <img
                        className="w-[300px]"
                        src={h?.urlToImage}
                        alt=""
                      ></img>
                    </div>
                    <div className=" mt-3">
                      <h3 className="">{h?.description}</h3>
                    </div>
                  </div>

                  <hr className="mt-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHeadLinesComp;
