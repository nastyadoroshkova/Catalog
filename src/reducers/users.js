import {ADD_USER, REMOVE_ALL_USER} from '../types/users';

export default (state=[], action) => {
    switch (action.type) {
        case ADD_USER: 
            return [...state, action.payload];
        case REMOVE_ALL_USER:
            return [];
        default: return state;
    }
}
