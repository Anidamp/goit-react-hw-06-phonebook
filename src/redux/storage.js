import { combineReducers } from "redux";
import { setFilterReducer, contactReducer } from "./reducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "products",
    version: 1,
    storage,
    blacklist: ["filter"],
};

const phoneBookReducer = combineReducers({
    contacts: contactReducer,
    filter: setFilterReducer,
});

const persistPhoneBookReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
    reducer: persistPhoneBookReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);