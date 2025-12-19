import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../model/schema";
import { act } from "react";

const initialState: User = {
    id: 0,
    name: "",
    email:"",
}

export const dataExplorerSlice = createSlice({
    name: 'dataExplorer',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
    }

})

export const {setId, setName, setEmail} = dataExplorerSlice.actions
export default dataExplorerSlice.reducer