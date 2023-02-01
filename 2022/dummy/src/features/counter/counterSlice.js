import { createSlice } from "@reduxjs/toolkit";

// Slice
export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
		word: "hello",
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

// Selectors
export const value = (state) => state.counter.value;
export const word = (state) => state.counter.word;

// Exports
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
