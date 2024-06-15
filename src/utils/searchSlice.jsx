import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheSearch: {},
    isSearch: false,
    searchQuery: "",
  },
  reducers: {
    cacheResult: (state, action) => {
      state.cacheSearch = Object.assign(state.cacheSearch, action.payload);
    },
    setIsSearchTrue: (state) => {
      state.isSearch = true;
    },
    setIsSearchFalse: (state) => {
      state.isSearch = false;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      console.log("seach is updated", action.payload);
    },
  },
});

export default searchSlice.reducer;
export const {
  cacheResult,
  setIsSearchTrue,
  setIsSearchFalse,
  setSearchQuery,
} = searchSlice.actions;
