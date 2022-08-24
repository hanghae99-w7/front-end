import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import item from './modules/item';
import basket from './modules/basket';
import service from './modules/service';
import item from './modules/item';

const rootReducer = combineReducers({ item, user, basket, service });

const store = configureStore({ reducer: rootReducer });

export default store;