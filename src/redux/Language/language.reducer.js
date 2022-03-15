
import { ENGLISH, FRENCH } from './language.types';


const INITIAL_STATE = {

    language: 'English',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ENGLISH:

            return {

                ...state, language:"English",

            };

        case FRENCH:

            return {
                language:"Français",

            };

        default: return state;

    }

};

export default reducer;
