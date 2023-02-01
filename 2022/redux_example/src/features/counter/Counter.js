import React from "react";
import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<span className="value">{counter}</span>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	);
}
