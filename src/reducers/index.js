import {combineReducers} from 'redux';
import users from './users';
import products from './products';

const reducer = combineReducers({
    users,
    products
});

export default reducer;