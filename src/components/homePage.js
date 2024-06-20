import { UseNewsApi } from "../custom-hooks/useNewsApi";
import logo from "../images/logo.png";
import ShowNewsComponent from "./NewsComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  AllNewsData,
  addCategory,
  addCategoryData,
  addSearchResult,
  clearCategoryData,
  clearNewsData,
  clearSearchResult,
  setCurrentPage,
} from "../utils/createStoreSlice";

import { UseNewsHeadlinesApi } from "../custom-hooks/useNewsHeadlinesApi";
import NewsDataByCategory from "./NewsDataByCategory";
import { useState } from "react";
import SearchResultComp from "./SearchResultComp";
import { MdFavoriteBorder } from "react-icons/md";
import FavouriteArticles from "./favoriteArticleComp";
import { API_KEY } from "../utils/constants";

const HomePage = () => {
  const [query, setQuery] = useState(null);
  const [show, setShow] = useState(false);
  const [showHomeComp, setShowComp] = useState(true);  
  const [showCategory, setShowCategory] = useState(false);
  const itemsPerPage = 10; // Number of items per page

  const CurrentPage = useSelector((store) => store.NewsDataSlice.currentPage);

  const dispatch = useDispatch();

  const category = useSelector((store) => store.NewsDataSlice.category);
  const NewsCategoryData = useSelector(
    (store) => store?.NewsDataSlice?.categoryData
  );

  const SearchNews = useSelector((store) => store?.NewsDataSlice?.searchResult);
  const NewsData = useSelector((store) => store?.NewsDataSlice?.newsData);
  const favourite = JSON.parse(localStorage.getItem("articles"));

  // Intially when the react application start it makes the API call intially for headline and for the Top news data.
  UseNewsApi();
  UseNewsHeadlinesApi();

  // here we are fetching the data of home component again when we switch component we replc]ace the un-used component that's is home from there,
  // to get the data back we make the API call.
  const handleClick = async () => {
    setShowComp(true);
    dispatch(clearCategoryData());
    dispatch(clearSearchResult());
    try {
      const datafetch = await fetch(
        `https://newsapi.org/v2/everything?sources=the-times-of-india&language=en&page=${CurrentPage}&pageSize=${itemsPerPage}&apiKey=${API_KEY}`
      );
      const data = await datafetch.json();
      dispatch(AllNewsData(data.articles));
    } catch (error) {
      throw new Error("404 Error", error.message);
    }
  };

  // fetching the articles data based on the input query.
  const SearchNewsHandler = async () => {

    setShowCategory(false);
    dispatch(clearNewsData());
    dispatch(clearSearchResult());
    try {
      const dataSearch = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2024-06-19&to=2024-06-19&sortBy=popularity&page=${CurrentPage}&pageSize=${itemsPerPage}&apiKey=${API_KEY}`,
        { allowOrigin: true }
      );
      const data = await dataSearch.json();
      dispatch(addSearchResult(data.articles));
 
    } catch (error) {
      throw new Error("404 Error", error.message);
    }
  };

  // fetching the articles data based on the input query.
  const showNewsDataByCategoryhandler = async () => {
    dispatch(setCurrentPage());
    setShow(false);
    setShowComp(false);
    setShowCategory(true);
    const datafetch = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
    );
    const NewsCategory = await datafetch.json();

    dispatch(addCategoryData(NewsCategory.articles));
  };

  //To Show all the favorite Articles , we have to remove some un used data or comp and show the favorite articles which is stored in local Storage.
  const favoritehandler = () => {
    setShow(true);
    setShowComp(false);
    dispatch(clearNewsData());
    dispatch(clearSearchResult());
    dispatch(clearCategoryData());
  };

  return (
    <>
      <div className="ml-56 mr-56 border border-black bg-black h-24  max-lg:w-full max-lg:ml-0 max-lg:mr-0">
        <div className="flex justify-center">
          <img className="rounded-full w-16 h-16 mt-2" src={logo} alt="logo" />
          <h1 className="font-serif font-bold text-4xl text-white ml-5 mt-6">
            News Portal
          </h1>
        </div>

        <div className="flex justify-end max-sm:mt-3 max-sm:flex max-sm:justify-center">
          <MdFavoriteBorder className="text-white -mt-3" />
          <p
            className="text-white float-right mr-5 -mt-4 ml-2 hover:text-red-600 cursor-pointer"
            onClick={favoritehandler}
          >
            Favourite Articles
          </p>
        </div>
      </div>

      <div className="ml-56 mr-56 border border-gray-100 bg-gray-100 h-12 max-lg:w-full max-lg:ml-0 max-lg:mr-0">
        <div className="flex justify-evenly mt-1">
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={handleClick}
          >
            Home
          </button>
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={() => {
              dispatch(addCategory("general"));
              showNewsDataByCategoryhandler();
            }}
          >
            general
          </button>
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={() => {
              dispatch(addCategory("health"));
              showNewsDataByCategoryhandler();
            }}
          >
            health
          </button>
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={() => {
              dispatch(addCategory("sciences"));
              showNewsDataByCategoryhandler();
            }}
          >
            sciences
          </button>
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={() => {
              dispatch(addCategory("sports"));
              showNewsDataByCategoryhandler();
            }}
          >
            sports
          </button>
          <button
            className="hover:bg-gray-200 p-1 text-base font-semibold"
            onClick={() => {
              dispatch(addCategory("technology"));
              showNewsDataByCategoryhandler();
            }}
          >
            technology
          </button>
          <div className="mt-1 max-lg:hidden">
            <input
              type="text"
              className="border border-gray-300 w-48"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              className="ml-3 border border-red-600 bg-red-600 text-white  w-24"
              onClick={SearchNewsHandler}
            >
              Search
            </button>
          </div>
        </div>
        <br></br>
        <div className="mt-1 max-sm:block max-lg:block lg:hidden xl:hidden ml-3">
          <input
            type="text"
            className="border border-gray-300 w-48"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            className="ml-3 border border-red-600 bg-red-600 text-white  w-24"
            onClick={SearchNewsHandler}
          >
            Search
          </button>
        </div>
      </div>

      {/* If news category data is not null and show category is also true it will show the data based on category */}
      {NewsCategoryData !== null && showCategory && <NewsDataByCategory />}

      {/* if search news is null and show home comp is true then it will show the news component */}
      {SearchNews === null && showHomeComp && <ShowNewsComponent />}

      {/* if search news has data and & length is greater then 0 of localStorage then it will show the Search Result data */}
      {SearchNews !== null && favourite.length > 0 && <SearchResultComp />}

      {/* now we are switching the comp for example from home to favorite comp then we make sure the news data is null and show is true  */}
      {NewsData === null && show && <FavouriteArticles />}
    </>
  );
};

export default HomePage;
