import { types } from "../types";

const initialState = {
	notes: [],
	active: null
};

function notesReducer(state = initialState, action) {
	switch (action.type) {
		case types.notesActive:
			return {
				...state,
				active: {
					...action.payload
				}
			};
		
		case types.notesLoad:
			return {
				...state,
				notes: [ ...action.payload ]
			};
		
		default:
			return state;
	}
}

export default notesReducer;