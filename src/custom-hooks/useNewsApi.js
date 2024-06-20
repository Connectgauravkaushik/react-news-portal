import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllNewsData } from "../utils/createStoreSlice";
import { API_KEY } from "../utils/constants";

export const UseNewsApi = () => {
    const dispatch = useDispatch();
    const itemsPerPage = 10; // Number of items per page

    const CurrentPage = useSelector(store => store.NewsDataSlice.currentPage); //Current page Number

 
    // On Change of Current page dependency useEffect will again re-render the entire component with new data
    useEffect(() => {
        NewsDataFetch();
    }, [CurrentPage]);
    


    // Here We are fetching all the news from the particular source,but we are defining the per page data.
    const NewsDataFetch = async () => {

        try {
            const datafetch = await fetch(
               ` https://newsapi.org/v2/everything?sources=the-times-of-india&language=en&page=${CurrentPage}&pageSize=${itemsPerPage}&apiKey=${API_KEY}`
            );
            const data = await datafetch.json();
            dispatch(AllNewsData(data.articles));
         
        } catch (error) {
            throw new Error(alert(error.message));
        }

    };
};
