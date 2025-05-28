import { createSlice } from "@reduxjs/toolkit";

let productList = []

export const productSlice = createSlice({
  name: "productData",
  initialState: productList,
  reducers:{
    addProduct: (state, action) => {
        let availableSatus = 'true'
      if(action.payload.available !== true){
        availableSatus = 'false'
      }
    state.push({
        id: state.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: availableSatus
      });
    },
    deleteProduct: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload)},
    changeProduct: (state, action) => {

      const prod = state.find(product => product.id === action.payload.id);

      if (action.payload.name) {
        console.log(prod.name);
        console.log(action.payload.name);
        prod.name = action.payload.name;
      }
      if (action.payload.description) {
        prod.description = action.payload.description;
      }
      if (action.payload.price) {
        prod.price = action.payload.price;
      }
    },
    availableProduct: (state, action) => {
      const prod = state.find(product => product.id === action.payload);
      if (prod.available == 'true') {
        prod.available = 'false'
      } else {
        prod.available = 'true'
      }
    }
  },
});

export const { addProduct, deleteProduct, changeProduct, availableProduct} = productSlice.actions;

export default productSlice.reducer;