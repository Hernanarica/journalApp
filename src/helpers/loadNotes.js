import { db } from "../firebase/firebaseConfig";

export const loadNotes = async uid => {
	const notesSnap = await db.collection(`${ uid }/react-journal-app/notes`).get();
	const notes     = [];
	
	notesSnap.forEach(snaoChild => {
		notes.push({
			id: snaoChild.id,
			...snaoChild.data()
		});
	});
	
	return notes;
};