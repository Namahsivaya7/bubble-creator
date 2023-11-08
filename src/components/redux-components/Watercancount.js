import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  waterCans: [],
  price: 0,
  perday: 0,
};

const Watercancount = createSlice({
  name: "water",
  initialState,
  reducers: {
    addWaterCan: (state, action) => {
      const { waterCapacity, price, perday } = action.payload;
      state.waterCans = [
        ...state.waterCans,
        { capacity: waterCapacity, price, perday: waterCapacity },
      ];
      state.capacity += waterCapacity;
      state.price -= price;
      state.perday += waterCapacity / 30;
    },

  },


});

// Action creators are generated for each case reducer function
export const { addWaterCan } = Watercancount.actions;

export default Watercancount.reducer;