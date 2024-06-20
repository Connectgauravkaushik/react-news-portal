import { createSlice } from "@reduxjs/toolkit";

const NewsDataSlice = createSlice({
  name: "News data",
  initialState: {
    newsData: null,
    newsHeadlines: null,
    category: null,
    categoryData: null,
    searchResult: null,
    currentPage: 1,
    totalPage: 1,
  },
  reducers: {
    AllNewsData: (state, action) => {
      state.newsData = action.payload;
    },
    AllnewsHeadlinesData: (state, action) => {
      state.newsHeadlines = action.payload;
    },
    clearNewsData: (state, action) => {
      state.newsData = null;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
    clearCategoryData: (state, action) => {
      state.categoryData = null;
    },
    addSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    clearSearchResult: (state, action) => {
      state.searchResult = null;
    },
    addCurrentPage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    prevPage: (state, action) => {
      state.currentPage = state.currentPage - 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = 1;
    },
    addTotalPage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
  },
});

export const {
  AllNewsData,
  AllnewsHeadlinesData,
  addCategory,
  addCategoryData,
  clearCategoryData,
  addSearchResult,
  clearNewsData,
  clearSearchResult,
  addCurrentPage,
  setCurrentPage,
  prevPage,
} = NewsDataSlice.actions;
export default NewsDataSlice.reducer;
