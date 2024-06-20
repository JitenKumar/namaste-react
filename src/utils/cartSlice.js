import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    /***
     * Old version of Redux
     * const newState = {...oldState};
     * newState.items.push(newItem);
     * have to return the new state in old version of Redux
     * return newState
     * In new redux we have mutate the state
     * In new redux immer is being used
     */

    /***
     *
     *
     * Redux uses the immer behind the scenes to mutate the state
     */

    //directly mutating the state or return the new state so that redux can muttate the state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // Below three are good examples
      //state.items = [];
      state.items.length = 0;
      //return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
