//Store
import { configureStore } from "@reduxjs/toolkit";

//Reducers
import { counterReducer } from "../features/counter/counterSlice";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		allRecipes: allRecipesReducer,
		favoriteRecipes: favoriteRecipesReducer,
		searchTerm: searchTermReducer,
	},
});
