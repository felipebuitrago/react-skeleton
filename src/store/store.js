import { configureStore } from '@reduxjs/toolkit';
import { 
    authSlice,
 } from './reducers';

export const store = configureStore({

    reducer : {
        auth:       authSlice.reducer,
    },
})