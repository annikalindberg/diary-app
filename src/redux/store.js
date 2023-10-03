import { configureStore } from '@reduxjs/toolkit';
import { diaryReducer } from './reducers/diaryReducer';

export const store = configureStore({
    reducer: {
        diary: diaryReducer,
    },
});
