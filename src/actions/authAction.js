import { types } from "../types";

// Creamos la acción asíncrona
export const startLoginEmailPassword = (email, password) => {
	// Thunk nos ofrece el dispatch
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login('123', 'Pedro'));
		}, 3500);
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});