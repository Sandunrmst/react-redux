import { createSlice } from "@reduxjs/toolkit"
import store from "../Store"

const initialState =[ {
    id: 1,
    price:250000,
    spec: {
        cpu:'i3',
        spec:14,
        ram:'8GB DDR4',
        hdd:'1TB'
    }
}]

const laptopSlice = createSlice({
    name: 'laptop',
    initialState: initialState,
    reducers: {
        addLaptop: (state, action) => {
            //now here we used immer library then we no need to use spread opperator for state objects updates
            state.push(action.payload)
        }
    }
})

export const laptopSliceSelector = (store) => store.laptopSlice
export const {addLaptop} = laptopSlice.actions
export default laptopSlice.reducer
