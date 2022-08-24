import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import service from './modules/service';
import item from './modules/item';

const rootReducer = combineReducers({ item, user, service });

const store = configureStore({ reducer: rootReducer });

export default store;