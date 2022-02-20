import React from 'react';
import { Provider } from "react-redux"; // Hace lo mismo que el Provider de context, es un HOC
import { AppRouter } from './routers/AppRouter';
import { store } from "./store/store";

export const JournalApp = () => {
	return (
		// Establecemos nuestro store en el punto más alto de nuestra aplicación como hacemos con context
		<Provider store={ store} >
			<AppRouter />
		</Provider>
	);
};
