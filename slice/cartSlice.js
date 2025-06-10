import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (newState) => {
  localStorage.setItem("cart", JSON.stringify(newState));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers:{
    addProduct: (state, action) => {
      const existingItemIndex = state.findIndex((item) => item.goodId === action.payload.id);

      if (existingItemIndex >= 0) {
        state[existingItemIndex].count += 1;
      } else {
      state.push({
          id: state.length,
          goodId: action.payload.id,
          url_foto: action.payload.foto,
          name: action.payload.name,
          price: action.payload.price,
          color: action.payload.color,
          size: action.payload.size,
          count: 1,
          available: true,
        });}
        updateLocalStorage(state);
    },
    deleteProduct: (state, action) => {
      console.log(action.payload.id);
      const newState = state.filter((prod) => prod.goodId !== action.payload.id);
      updateLocalStorage(newState);
      return newState;
      
    },
    changeProduct: (state, action) => {
      const itemChange = state.findIndex((item) => item.goodId === action.payload.id);
      if(itemChange >= 0){
        state[itemChange].count = parseInt(action.payload.value);
      }
    },
    sumProduct: (state) => {
      return state.reduce((sum, prod) => sum + prod.count * prod.price, 0)
    }
  },
});

export const { addProduct, deleteProduct, changeProduct, sumProduct } = cartSlice.actions;

export default cartSlice.reducer;
