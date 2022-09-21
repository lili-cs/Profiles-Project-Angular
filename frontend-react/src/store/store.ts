import { configureStore } from '@reduxjs/toolkit';
import { Profile } from '../interfaces/profile';
import profileReducer from '../store/profileSlice';


export const store = configureStore({
    reducer: {
        profile: profileReducer
    }
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export default store;
