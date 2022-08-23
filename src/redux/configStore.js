import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import item from './modules/item';

const rootReducer = combineReducers({ item, user });

const store = configureStore({ reducer: rootReducer });

export default store;