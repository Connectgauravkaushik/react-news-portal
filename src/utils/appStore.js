import { configureStore } from "@reduxjs/toolkit";
import NewsDataSlice from "./createStoreSlice";
const appStore = configureStore(
    {
     reducer:{
        NewsDataSlice:NewsDataSlice
     }
    }
);


export default appStore;