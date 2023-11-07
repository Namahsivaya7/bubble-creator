import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  waterCans: [],
  price:[],
};

const Watercancount = createSlice({
  name: "water",
  initialState,
  reducers: {
    addWaterCan: (state, action) => {
      const { waterCapacity, price  } = action.payload;
      state.waterCans = [
        ...state.waterCans,
        { capacity: waterCapacity, price },
      ];
      state.capacity += waterCapacity;
      state.balance += price;
    },
  },

  
});

// Action creators are generated for each case reducer function
export const { addWaterCan } = Watercancount.actions;

export default Watercancount.reducer;