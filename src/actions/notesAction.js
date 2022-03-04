import { db } from "../firebase/firebaseConfig";
import { types } from "../types";
import { loadNotes } from "../helpers/loadNotes";

export const startNewNote = () => {
	// getState es una función, un 2do argumento que me da thunks y me da acceso al state
	return async (dispatch, getState) => {
		const uid     = getState().auth.uid;
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime()
		};
		
		const docRef = await db.collection(`${ uid }/react-journal-app/notes`).add(newNote);
		
		dispatch(activeNote(docRef.id, newNote));
	};
};

export const activeNote = (id, note) => (
	{
		type: types.notesActive,
		payload: {
			id,
			...note
		}
	}
);

export const setNotes = notes => (
	{
		type: types.notesLoad,
		payload: notes
	}
);

export const startLoadingNotes = uid => {
	return async dispatch => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};