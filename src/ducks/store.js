import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './userReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
   user: userReducer,
   events: eventsReducer
});

const devTools = process.env.NODE_ENV === 'development' ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;

export default createStore(rootReducer, compose(applyMiddleware(promise), devTools));