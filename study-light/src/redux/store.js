import counterReducer from "./counterSlice";
import AppReducer from "./appDataSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["counter", "appData"], // persist these reducers
};
const rootReducer = combineReducers({
    counter: counterReducer,
    appData: AppDataReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },  
        }),
});

export const persistor = persistStore(store);
