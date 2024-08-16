import {createSlice} from "@reduxjs/toolkit";
import {InitState} from "@/models/nodeChangeSlice/NodeChangeModel";

export const themeSlice = createSlice({
    name:'theme',
    initialState:InitState,
    reducers:{
        isChange:(state) =>{state.isChange = !state.isChange}
    }
});

export const {isChange} =  themeSlice.actions;
export default themeSlice.reducer