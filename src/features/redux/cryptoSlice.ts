import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CryptoResponse, CryptoSliceType } from "../../types/CryptoTypes";

// Define the initial state using that type
const initialState: CryptoSliceType = {};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    requestInfo: (state, action: PayloadAction<CryptoResponse>) => {
      return action.payload.reduce(
        (acc: CryptoSliceType, item) => {
          if (!acc[item.name]) {
            acc[item.name] = []

          }
          acc[item.name].push({ volume: item.volume, unit: item.unit });
          return acc
        },
        { ...state }
      );
    },
  },
});

export const { requestInfo } = cryptoSlice.actions;

export default cryptoSlice.reducer;
