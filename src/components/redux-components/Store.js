import { configureStore } from "@reduxjs/toolkit";
import waterCanReducer from "./Watercancount";
import Settings from "../Settings";


export const Store = configureStore({
    reducer: {
        water: waterCanReducer,
    },
});


