import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import service from './modules/service';
import item from './modules/item';

const rootReducer = combineReducers({ user, service, item });

const store = configureStore({ reducer: rootReducer });

export default store;