import { createStore, combineReducers } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combinamos todos los reducers por buena práctica
const reducers = combineReducers({
	auth: authReducer
});

// Creamos el store
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);