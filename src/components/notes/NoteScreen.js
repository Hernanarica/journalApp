import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

export const NoteScreen = () => {
	const { active: note }                         = useSelector(state => state.notes);
	const [ formValues, handleInputChange, reset ] = useForm(note);
	const { body, title, url }                     = formValues;
	const activeId                                 = useRef(note.id);
	
	useEffect(() => {
		if (note.id !== activeId) {
			reset(note);
			
			activeId.current = note.id;
		}
	}, [ note, reset ]);
	
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off" value={ title } onChange={ handleInputChange } />
				<textarea placeholder="What happened today" className="notes__textarea" value={ body } onChange={ handleInputChange } />
				{
					url && (
						<div className="notes__image">
							<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="imagen" />
						</div>
					)
				}
			</div>
		</div>
	);
};
