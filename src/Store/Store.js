import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todu/todoSlice'

export const store = configureStore({

    reducer: todoReducer

})