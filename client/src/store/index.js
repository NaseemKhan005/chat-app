import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import apiSlice from "./api/apiSlice";
import authSlice from "./slices/auth/authSlice";
import userSlice from "./slices/chat/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: authReducer,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export const persistor = persistStore(store);
