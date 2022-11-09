import { createSlice } from "@reduxjs/toolkit";


const loadingSlice = createSlice({
    name: 'loading',
    initialState: { loadingShow: false },
    reducers: {
        loading: (state, action) => {
            state.loadingShow =action.payload;
            document.body.style.overflow = state.loadingShow ? ' hidden ' : ' auto ';

        },
    }
})



export default loadingSlice.reducer
const { loading } = loadingSlice.actions;
export { loading }