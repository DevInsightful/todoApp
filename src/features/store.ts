import todoSlice from './todoSlice/todoSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer:{
        todo:todoSlice,
    },
    

})
export type RootState=ReturnType<typeof store.getState>