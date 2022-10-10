import { createSlice } from "@reduxjs/toolkit";

const EditBarSlice = createSlice({
    name: 'editBar',
    initialState: { editProfile: false, newProduct: false, editProduct: false, addCategory: false ,banerPictureModal:false},
    reducers: {
        showEditProfile: (state, action) => {
            state.editProfile = action.payload
        },
        showNewProduct: (state, action) => {
            state.newProduct = action.payload
        },
        showEditProduct: (state, action) => {
            state.editProduct = action.payload
        },
        showAddCategory: (state, action) => { 
            state.addCategory = action.payload
        },
        showAddBanerPicture: (state, action) => {
            state.banerPictureModal = action.payload
        },
    }
})


export default EditBarSlice.reducer
const { showEditProfile, showNewProduct, showEditProduct, showAddCategory ,showAddBanerPicture} = EditBarSlice.actions;
export { showEditProfile, showNewProduct, showEditProduct, showAddCategory ,showAddBanerPicture}