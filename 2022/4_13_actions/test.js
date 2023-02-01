const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "songs/addSong": {
			return [...state, action.payload];
		}
		case "songs/removeSong": {
			return state.filter((allSongs) => {
				allSongs !== action.payload;
			});
		}
		case "songs/removeAll": {
			return [];
		}
		default: {
			return state;
		}
	}
};

const initialState = ["print something", "pack snacks", "summit the mountain"];

const addNewSong = {
	type: "songs/addSong",
	payload: "Halo",
};

const removeSong = {
	type: "songs/removeSong",
	payload: "Take Five",
};

const removeAll = {
	type: "songs/removeAll",
};
