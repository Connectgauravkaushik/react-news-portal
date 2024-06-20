import { useDispatch } from "react-redux";
import { addCurrentPage, prevPage } from "../utils/createStoreSlice";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const PaginationComp = () => {
  const dispatch = useDispatch();
  const [Preactive, PreSetActive] = useState(false);
  const [Nextactive, NextSetActive] = useState(false);


  return (
    <>
      <div className="grid justify-end bg-white px-4 py-3 sm:px-6 mt-20 ml-300px ">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className={`relative inline-flex items-center rounded-md border ${Preactive ? " border-red-600 bg-red-600 text-white" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
            onClick={() => {
              dispatch(prevPage())
              PreSetActive(true);
              NextSetActive(false);
            }

            }
          >
            Previous
          </a>
          <a
            href="#"
            className={`relative ml-3 inline-flex items-center rounded-md border${Nextactive ? " border-red-600 bg-red-600 text-white" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
            onClick={() => {
              dispatch(addCurrentPage())
              NextSetActive(true);
              PreSetActive(false);
            }
            }
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

          <div >
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className={`relative inline-flex items-center rounded-md border ${Preactive ? " border-red-600 bg-red-600 text-white" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
                onClick={() => {
                  dispatch(prevPage())
                  PreSetActive(true);
                  NextSetActive(false);
                }

                }
              >
                <span className="sr-only">Previous</span>
                <GrPrevious className="h-5 w-5" aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-current="page"
                className=
                {`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}

              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={() => dispatch(addCurrentPage())}
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                onClick={() => dispatch(addCurrentPage())}
              >
                3
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                onClick={() => dispatch(addCurrentPage())}
              >
                4
              </a>
              <a
                href="#"
                className={`relative ml-3 inline-flex items-center rounded-md border border-black ${Nextactive ? " border-red-600 bg-red-600 text-white" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
                onClick={() => {
                  dispatch(addCurrentPage())
                  NextSetActive(true);
                  PreSetActive(false);
                }
                }
              >
                <span className="sr-only" >Next</span>
                <GrNext className="h-5 w-5" aria-hidden="true" onClick={() => dispatch(addCurrentPage())} />
              </a>
            </nav>
          </div>
        </div>
      </div>

    </>
  );
}

export default PaginationComp;