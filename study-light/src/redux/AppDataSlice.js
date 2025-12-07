import {createSlice} from "@reduxjs/toolkit";
import {AppData, User} from "../data/schema";

const initialState: AppData= {
    authToken: "",
    isAuthenticated: false,
    isAdmin: false,
    isLoading: false,
    loginMessage: "Please login...",
    
}
export const appDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
    updateAuthToken: (state, action) => {
        state.authToken = action.payload;
    },
    updateIsAuthenticated: (state, action) => {
        state.isAuthenticated = action.payload;
    },
    updateIsAdmin: (state, action) => {
        state.isAdmin = action.payload;
    },
    updateIsLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    updateLoginMessage: (state, action) => {
        state.loginMessage = action.payload;
    },
    // updateUserData: (state, action) => {
    //     state.id = action.payload.id;
    //     state.email = action.payload.email;
    //     state.Name = action.payload.Name;
    // }
    }
});

export const {updateAuthToken, updateIsAuthenticated, updateIsAdmin, updateIsLoading, updateLoginMessage, updateUserData} = appDataSlice.actions;
export default appDataSlice.reducer;