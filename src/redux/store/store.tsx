import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "@/redux/slices/themeSlice";

export const store = configureStore({
    reducer:{
        theme:themeSlice.reducer
    }
});
