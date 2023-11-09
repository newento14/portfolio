import {configureStore} from "@reduxjs/toolkit"
import tabsSlice from './reducers/tabsSlice'
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    tabs: tabsSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;