import React from "react";
import { AllRecipes } from "./features/allRecipes/AllRecipes.js";
import Counter from "./features/counter/Counter.js";

export default function App() {
	return (
		<main>
			<div className="app">This is the Counter</div>
			<Counter />
			<AllRecipes />
		</main>
	);
}
