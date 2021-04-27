import {createStore, configureStore} from 'redux';
import todoReducer from './todoReducer';

const store = createStore(todoReducer);
// console.log(store.getState());

export default store;