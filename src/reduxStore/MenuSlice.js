import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name: 'menu',
    initialState: { showMenu: false },
    reducers: {
        showMenu: (state, action) => {
            state.showMenu = action.payload;
        },
    }
})



export default menuSlice.reducer
const { showMenu } = menuSlice.actions;
export { showMenu }