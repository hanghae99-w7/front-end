import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import item from './modules/item';
import basket from './modules/basket';

const rootReducer = combineReducers({ item, user, basket });

const store = configureStore({ reducer: rootReducer });

export default store;