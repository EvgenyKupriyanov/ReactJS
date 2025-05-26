import { configureStore} from '@reduxjs/toolkit';
import toggleReducer from '../theme/themeToggle.js';

export const store = configureStore({
  reducer:
  {
    theme: toggleReducer,
  },
});