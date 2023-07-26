import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const SearchAsync = createAsyncThunk(
    "auth/search",
    async ({ page, keywords, types, sources, authors }) => {
      try {
        const response =await axios.post(`${process.env.REACT_APP_API_URL}/search?page=${page}`, {
            keywords, types, sources, authors
        });
        return response.data.data;
        
      } catch (error) {
        throw new Error("Search Failed.");
      }
    }
  );

export const OptionsAsync = createAsyncThunk(
    "auth/filters",
    async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL+"/filters");
        return response.data.data;
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
  );

const newsSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        data: [],
        options: {
            soruces: [],
            types: [],
            authors: [],
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(SearchAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(SearchAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(SearchAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(OptionsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(OptionsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.options = action.payload;
        })
        .addCase(OptionsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
      },
});

export const newsActions = newsSlice.actions;

export default newsSlice;