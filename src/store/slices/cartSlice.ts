import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItems {
    id: number,
    name: string,
    cartQty: number,
    price: number,
}

interface CartState {
  value: CartItems[]
}

const initialState: CartState = {
  value: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItems>) {
      const itemInCart = state.value.find((item) => item.name === action.payload.name);
      if(itemInCart) {
        itemInCart.cartQty++;
      }
      state.value.push({...action.payload, cartQty: 1});
      
    },
    incrementcartQty(state, action: PayloadAction<CartItems>) {
      const item = state.value.find((item) => item.name === action.payload.name);
      if(item) {item.cartQty++};
    },
    decrementcartQty(state, action: PayloadAction<CartItems>) {
      const item = state.value.find((item) => item.name === action.payload.name);
      if(item) {item.cartQty--};
    },
    removeItem(state, action: PayloadAction<CartItems>) {
      const removeItem = state.value.filter((item) => item.name !== action.payload.name);
      state.value = removeItem;
    },
    emptyCart(state) {
      state.value = [];
    }
  }
})

export const { addItem,
  incrementcartQty,
  decrementcartQty,
  removeItem, 
  emptyCart
} = cartSlice.actions;

export default cartSlice;