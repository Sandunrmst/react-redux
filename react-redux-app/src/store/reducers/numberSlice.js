import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number:0,
    laptop:[]
}

const numberSlice = createSlice({
    name:'number',
    initialState,
    reducers:{
        increment: (state, action)=>({
            ...state, //spred for override to count values below -> this step can skip please learn more
            number: state.number + action.payload //immer libry can helps you to skip spred operator -> redux-toolkit has that libry
        }),
        decrement: (state, action)=>({
            ...state, //spred for override to count values below -> this step can skip please learn more
            number: state.number - action.payload //immer libry can helps you to skip spred operator -> redux-toolkit has that libry
        })
    }
})

export const {increment, decrement} = numberSlice.actions

export default numberSlice.reducer