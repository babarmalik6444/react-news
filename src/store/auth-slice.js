import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const loginAsync = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
      try {
        const response = await axios.post(process.env.REACT_APP_API_URL+"/login", { email, password });

        return response.data;
        
      } catch (error) {
        throw new Error("Failed to log in. Please check your credentials.");
      }
    }
  );

export const SignupAsync = createAsyncThunk(
    "auth/signup",
    async ({ name, email, password }) => {
      try {
        const response = await axios.post(process.env.REACT_APP_API_URL+"/user/create", { name, email, password });
  
        return response.data.user;
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
  );

  export const logoutAsync = createAsyncThunk(
    "auth/logout",
    async (_, { getState }) => {
      try {
        const state = getState(); // Get the current state
        
        const token = state.user?.token; 
        if (!token) {
          throw new Error("Bearer token not found.");
        }
  
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        return response.data;
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        isAuthenticated: false,
        user: null,
        isCreated: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          alert("Login successful");
        })
        .addCase(loginAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(SignupAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(SignupAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.isCreated = true;
          alert("Signup successful");
        })
        .addCase(SignupAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(logoutAsync.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(logoutAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.user = null; 
          state.error = null; 
        })
        .addCase(logoutAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });

      },
});

export const authActions = authSlice.actions;

export default authSlice;