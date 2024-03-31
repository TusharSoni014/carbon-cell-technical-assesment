import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TimeData {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface CurrencyData {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface BitcoinPriceIndex {
  USD: CurrencyData;
  GBP: CurrencyData;
  EUR: CurrencyData;
}

interface CryptoObject {
  time: TimeData;
  disclaimer: string;
  chartName: string;
  bpi: BitcoinPriceIndex;
}

interface ICryptoSlice {
  crytoData: CryptoObject | undefined;
  cryptoDataLoading: boolean;
}

const initialState: ICryptoSlice = {
  crytoData: undefined,
  cryptoDataLoading: false,
};

export const fetchCryptoData = createAsyncThunk<
  ICryptoSlice["crytoData"],
  void
>("fetch/cryptoData", async () => {
  const response = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  return response.data;
});

const cryptoSlice = createSlice({
  name: "cryptoSlice",
  initialState,
  reducers: {
    setCryptoDataLoading: (state, action: PayloadAction<boolean>) => {
      state.cryptoDataLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.cryptoDataLoading = true;
      })
      .addCase(fetchCryptoData.rejected, (state) => {
        state.cryptoDataLoading = false;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.crytoData = action.payload;
        state.cryptoDataLoading = false;
      });
  },
});

export const { setCryptoDataLoading } = cryptoSlice.actions;
export default cryptoSlice.reducer;
