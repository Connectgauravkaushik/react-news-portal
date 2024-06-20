import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AllnewsHeadlinesData } from "../utils/createStoreSlice";
import { API_KEY } from "../utils/constants";

export const UseNewsHeadlinesApi = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    NewsDataHeadLines();
  }, []);
  
// Here We are fetching all the main headlines from the particular source.
  const NewsDataHeadLines = async () => {
    // API key is stored in the constant js file.
    const datafetch = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&language=en&apiKey=${API_KEY}` 
    );
    const data = await datafetch.json();
    dispatch(AllnewsHeadlinesData(data.articles)); //here we are dispatching the fetch data in the redux store.
  };
};


