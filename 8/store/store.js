import { configureStore} from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice';


export const store = configureStore({
  reducer:
  {
    cart: cartReducer,
  },


});
  const savedCart = localStorage.getItem("cart");
if (savedCart) {
  store.dispatch({ type: "cart/setInitialState", payload: JSON.parse(savedCart) }); // Восстанавливаем состояние корзины
}

// Сохранение состояния корзины при каждом изменении
store.subscribe(() => {
  const currentCart = store.getState().cart; // Текущее состояние корзины
  localStorage.setItem("cart", JSON.stringify(currentCart)); // Сохраняем в Local Storage
});