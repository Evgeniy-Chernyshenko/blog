import { PayloadAction } from "@reduxjs/toolkit";
import { buildSlice } from "@/shared/lib/store/buildSlice";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = buildSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },

    decrement(state) {
      state.value -= 1;
    },

    add(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
