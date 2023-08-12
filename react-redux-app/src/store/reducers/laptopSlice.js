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
            ...state, //spred for override to count values below -> this step can skip please learn more
            counnt:state.counnt + action.payload //immer libry can helps you to skip spred operator -> redux-toolkit has that libry
        }),
        removeLaptop: (state, action) => ({
            ...state, //spred for override to count values below -> this step can skip please learn more
            counnt: state.counnt - action.payload //immer libry can helps you to skip spred operator -> redux-toolkit has that libry
        })
    }
})

export const {addLaptop, removeLaptop} = laptopSlice.actions

export default laptopSlice.reducer