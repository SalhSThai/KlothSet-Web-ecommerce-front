import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name: 'loading',
    initialState: { loadingShow: false },
    reducers: {
        loading: (state, action) => {
            state.loadingShow =action.payload
        },
    }
})



export default loadingSlice.reducer
const { loading } = loadingSlice.actions;
export { loading }