import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import product from './modules/product';

const rootReducer = combineReducers({ product, user });

const store = configureStore({ reducer: rootReducer });

export default store;