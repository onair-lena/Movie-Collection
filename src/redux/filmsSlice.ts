import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WillWatchState {
  value: number;
}

const initialState = { value: 0 } as WillWatchState;

const WillWatchSlice = createSlice({
  name: "willWatch",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  WillWatchSlice.actions;
export default WillWatchSlice.reducer;
