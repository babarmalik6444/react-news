import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth-slice";
import newsSlice from "./news-slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice.reducer),
  news: newsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
