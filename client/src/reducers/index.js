import { combineReducers } from 'redux';

import {posts , Login , SignUp }from './posts';

export const reducers = combineReducers({ posts , Login  , SignUp});
