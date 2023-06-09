import {ADD_FAV, REMOVE_FAV} from './actions';

const initialState = {myFavorites: []};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            let newFavorites = state.myFavorites.filter(character => character.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: newFavorites
            }
        default:
            return {...state}
    }
}

export default rootReducer;