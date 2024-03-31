import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "./slices/appSlice";
import populationSlice from "./slices/populationSlice";
import cryptoSlice from "./slices/cryptoSlice";

export const store = configureStore({
  reducer: {
    appSlice,
    populationSlice,
    cryptoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
