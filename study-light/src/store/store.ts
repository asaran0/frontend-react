import AppDataReducer from './appDataSlice';
import { configureStore, combineReducers} from "@reduxjs/toolkit"
import  storage  from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import  dataExplorerReducer  from './dataExplorerSlice';

const persistConfig = {
    key:"root",
    storage,
    whitelist: ["appData", "dataExplorer"]
}

const rootReducer = combineReducers ({
        appData: AppDataReducer,
        dataExplorer: dataExplorerReducer,
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