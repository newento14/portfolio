import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
  tabs: string[],
  selectedTab: number
}

const initialState: InitialState = {
  tabs: [],
  selectedTab: -1,
}

export const tabsSlice = createSlice({
  name: "hui",
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<string>) => {
      if (state.tabs.indexOf(action.payload) !== -1) {
        return  {
          selectedTab: state.tabs.indexOf(action.payload),
          tabs: state.tabs,
        }
      }
      return {
        selectedTab: state.tabs.length,
        tabs: [...state.tabs, action.payload]
      }
    },
    setSelectedTab: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      return {
        ...state,
        selectedTab: action.payload,
      }
    },
    removeTab: (state, action:PayloadAction<number>) => {
      if (state.selectedTab === action.payload) {
          return {
            selectedTab: state.tabs.length - 2,
            tabs: state.tabs.filter((x, i) => i !== action.payload),
          }
      }

      if (action.payload < state.selectedTab) {
        return {
          selectedTab: state.selectedTab - 1,
          tabs: state.tabs.filter((x, i) => i !== action.payload),
        }
      }
      return {
        ...state,
        tabs: state.tabs.filter((x, i) => i !== action.payload),
      }
    }
  }
});

export const {addTab, setSelectedTab, removeTab} = tabsSlice.actions;
export default tabsSlice.reducer;