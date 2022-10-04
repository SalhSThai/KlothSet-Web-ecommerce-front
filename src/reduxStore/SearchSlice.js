import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: { showSearch: false },
    reducers: {
        searchShow: (state, action) => {
            state.showSearch =action.payload
        },
    }
})



export default searchSlice.reducer
const { searchShow } = searchSlice.actions;
export { searchShow }