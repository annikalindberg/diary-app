// src/reducers/index.js this is the root reducer

import { combineReducers } from 'redux';
import diaryReducer from './diaryReducer';

export default combineReducers({
    diary: diaryReducer,
});
