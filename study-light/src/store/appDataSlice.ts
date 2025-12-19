import {createSlice} from '@reduxjs/toolkit';
import type { AppData } from '../model/schema';

const initialState: AppData = {
counter: 0,
authToken: "",
isAuthenticated: false,
isAdmin: false,
isLoading: false,
loginMessage: "",
}

export const appDataSlice = createSlice({
name: 'appData',
initialState,
reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
            },
        decrementCounter: (state) =>{
            state.counter -= 1;
            },
        setCounter: (state, action) => {
            state.counter = action.payload;
            },
        setAuthToken: (state, action) =>{
            state.authToken = action.payload;
            },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
            },
            setIsAdmin: (state, action) => {
                state.isAdmin = action.payload
            },
            setIsLoading: (state, action) => {
                state.isLoading = action.payload
            },
            setLoginMessage: (state, action) => {
                state.loginMessage = action.payload
            }
        }
    });

export const { incrementCounter, decrementCounter, setCounter, setAuthToken, setIsAuthenticated } = appDataSlice.actions;
export default appDataSlice.reducer;