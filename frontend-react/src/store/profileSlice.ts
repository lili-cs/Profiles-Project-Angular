import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../interfaces/profile";
import ProfileDataService from '../services/profile.service';

export const createProfile = createAsyncThunk(
    'profiles/create',
   async (profile:Profile) => {
        const res = await ProfileDataService.createProfile(profile);
        return res.data;
   }
);

export const getAllProfiles = createAsyncThunk(
    'profiles/fetch',
   async () => {
        const res = await ProfileDataService.getAllProfiles();
        return res.data;
   }
);

export const updateProfile = createAsyncThunk(
    'profiles/update',
   async (data: any) => {
        const { _id, profile } = data;
        const res = await ProfileDataService.updateProfile(_id, profile);
        return res.data;
   }
);

export const deleteProfile = createAsyncThunk(
    'profiles/delete',
   async (_id:string) => {
        const res = await ProfileDataService.deleteProfile(_id);
        return res.data;
   }
);

export const profileSlice = createSlice({
    name: 'profiles',
    initialState: {
        profiles: [] as any[],
        // loading: true
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProfiles.fulfilled, (state, action) => {
            state.profiles = [...action.payload];
        });
        builder.addCase(createProfile.fulfilled, (state, action) => {
            state.profiles.push(action.payload);
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            let profile = state.profiles.filter(item => item._id === action.payload._id)[0];
            profile = action.payload;
        });
        builder.addCase(deleteProfile.fulfilled, (state, action) => {
            state.profiles = state.profiles.filter(item => item._id !== action.payload._id);
        });
    }
    // extraReducers: {
    //     [getAllProfiles.fulfilled]: (state, action) => {}
    // }
});

const { reducer } = profileSlice;
export default reducer;