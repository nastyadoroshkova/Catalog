import {ADD_USER, REMOVE_ALL_USER} from '../types/users';

export const addUser = (id, name) => ({
    type: ADD_USER,
    payload: {id, name}
});

export const removeAllUser = () => ({
    type: REMOVE_ALL_USER
});