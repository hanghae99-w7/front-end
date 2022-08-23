import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import product from './modules/product';
import service from './modules/service';

const rootReducer = combineReducers({ product, user, service });

const store = configureStore({ reducer: rootReducer });

export default store;