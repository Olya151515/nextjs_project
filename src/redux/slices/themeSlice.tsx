import {createSlice} from "@reduxjs/toolkit";
import {initState} from "@/models/nodeChangeSlice/themeModel";
export const themeSlice  = createSlice({
    name:'theme',
    initialState:initState,
    reducers:{
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    }
});

export const { toggleTheme } = themeSlice.actions;