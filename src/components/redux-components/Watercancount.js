import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  waterCans: [],
  recordPayments: { payment: 20, date: new Date() },
  transactions: [],
  balance: 0,

  settings: { canCapacity: 0, pricePerCan: 0, familyStrength: 0 },
};

const watercancount = createSlice({
  name: "water",
  initialState,
  reducers: {
    addWaterCan: (state, action) => {
      const { capacity, price, date } = action.payload;
      state.waterCans = [
        ...state.waterCans,
        { capacity, price, date },
      ];
      state.balance -= price;
    },

    recordPayment: (state, action) => {
      const { date, payment } = action.payload;

      state.transactions = [...state.transactions, { payment, date }];

      state.balance += payment;
    },

    updateSettings: (state, action) => {
      const { canCapacity, pricePerCan, familyStrength } = action.payload;

      state.settings.canCapacity = canCapacity;
      state.settings.pricePerCan = pricePerCan;
      state.settings.familyStrength = familyStrength;
    },

    edit: (state, action) => {
      state.water.canCapacity = action.payload.canCapacity;
      state.water.pricePerCan = action.payload.pricePerCan;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWaterCan, recordPayment, updateSettings, edit } = watercancount.actions;
// export const { data, setDate } = watercancount.actions;
export default watercancount.reducer;