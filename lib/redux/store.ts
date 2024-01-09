import { configureStore  } from "@reduxjs/toolkit";
import datareducer from "./slice";
import pagereducer from "./pageslice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer:{
        datareducer,
        pagereducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector : TypedUseSelectorHook<RootState>= useSelector