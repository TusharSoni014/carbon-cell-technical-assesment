import { PopulationData } from "@/components/PopulationData/PopulationChart";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IPopulationSlice {
  populationDataLoading?: boolean;
  populationData: PopulationData[] | undefined;
}

const initialState: IPopulationSlice = {
  populationData: undefined,
  populationDataLoading: false,
};

export const fetchPopulationData = createAsyncThunk<
  {
    data: PopulationData[];
  },
  void
>("fetch/populationData", async () => {
  const response = await axios.get(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );
  return response.data;
});

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopulationData.pending, (state) => {
        state.populationDataLoading = true;
      })
      .addCase(fetchPopulationData.rejected, (state) => {
        state.populationDataLoading = false;
      })
      .addCase(fetchPopulationData.fulfilled, (state, action) => {
        state.populationData = action.payload.data.reverse();
        state.populationDataLoading = false;
      });
  },
});

export default appSlice.reducer;
