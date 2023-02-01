import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, value, word } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
	const count = useSelector(value);
	const letter = useSelector(word);
	const dispatch = useDispatch();

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span className={styles.value}>
					{count}
					{letter}
				</span>
				<button
					className={styles.button}
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</button>
			</div>
		</div>
	);
}
