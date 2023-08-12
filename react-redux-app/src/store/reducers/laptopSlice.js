import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counnt:10,
    brands:[]
}

const laptopSlice = createSlice({
    name:'laptop',
    initialState,
    reducers:{
        addLaptop: (state, action) => ({
            counnt:state.counnt + action.payload
        }),
        removeLaptop: (state, action) => ({
            counnt: state.counnt - action.payload
        })
    }
})

export const {addLaptop, removeLaptop} = laptopSlice.actions

export default laptopSlice.reducer