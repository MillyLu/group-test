import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    REGISTER,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './usersSlice';
import likesReducer from './likeSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
    users: userReducer,
    likes: likesReducer,
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ["users"], // при большом количестве users внести в blacklist(не перегружать ls)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
