import { configureStore} from '@reduxjs/toolkit';
import toggleReducer from '../slice/themeToggle.js';
import productReducer from '../slice/productSlice.js';

export const store = configureStore({
  reducer:
  {
    theme: toggleReducer,
    product: productReducer,
  },
});