/*import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import userReducer from "./usersSlice";

const rootReducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});*/

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./usersSlice";
import likesReducer from "./likeSlice";

const rootReducer = combineReducers({
  users: userReducer,
  likes: likesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
export const persistor = persistStore(store);
