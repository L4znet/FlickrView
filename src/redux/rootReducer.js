import { combineReducers } from 'redux';


import languageReducer from './Language/language.reducer';


const rootReducer = combineReducers({

    language: languageReducer,
});

export default rootReducer;
