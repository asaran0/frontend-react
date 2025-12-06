import counterReducer from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    persistedState: persistedState,
});

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})