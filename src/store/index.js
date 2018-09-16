import { createStore } from 'redux'
import rootReducer from '../reducers';

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        {}
    ); 

    return store;
}

export default createAppStore;