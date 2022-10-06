import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const dataSlice = createSlice({
    name: 'path',
    initialState: { allPath: [] },
    reducers: {
        fetchPath: (state, action) => {
            state.allPath = action.payload;
        },
    }
})

export const thunkPath = pathInfo => async dispatch => {
    try {

        const res = await axios.get('/data/fetchPath')
        const allPath =  res.data?.map(item=>item.shopPath)
        dispatch(fetchPath(allPath ))
    } catch (error) {
        throw error
    }
    finally{
    }
}

export default dataSlice.reducer
const { fetchPath } = dataSlice.actions;
export { fetchPath }