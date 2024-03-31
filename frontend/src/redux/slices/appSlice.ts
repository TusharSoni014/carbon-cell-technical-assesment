import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAppSlice {
  sidebarExpanded?: boolean;
  displayWidth: number;
  chartWidth: string;
  activeSidenavItem: string;
}

const initialState: IAppSlice = {
  sidebarExpanded: true,
  displayWidth: 1280,
  chartWidth: "700px",
  activeSidenavItem: "1",
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarExpanded = !state.sidebarExpanded;
    },
    setDisplayWidth: (state, action: PayloadAction<number>) => {
      state.displayWidth = action.payload;
    },
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.sidebarExpanded = action.payload;
    },
    setChartWidth: (state, action: PayloadAction<string>) => {
      state.chartWidth = action.payload;
    },
    setActiveSidenavItem: (state, action: PayloadAction<string>) => {
      state.activeSidenavItem = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setDisplayWidth,
  setSidebarState,
  setChartWidth,
  setActiveSidenavItem,
} = appSlice.actions;
export default appSlice.reducer;
