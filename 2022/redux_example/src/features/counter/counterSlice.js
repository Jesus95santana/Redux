//Actions
export const increment = function () {
	return { type: "increment" };
};

export const decrement = function () {
	return { type: "decrement" };
};

//Reducer
const initialState = 0;

export const counterReducer = function (state = initialState, action) {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		default:
			return state;
	}
};
