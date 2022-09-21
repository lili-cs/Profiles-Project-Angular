import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Profile } from '../../interfaces/profile';
import  ProfileList  from '../ProfileList/ProfileList';
import { getAllProfiles } from '../../store/profileSlice';
import AddProfile from "../AddProfile/AddProfile";

export function ProfilesPage() {
    const dispatch = useAppDispatch();
    const profiles: Profile[] = useAppSelector((state) => state.profile.profiles);

    useEffect(() =>{
        // console.log('here');
        dispatch(getAllProfiles());
    }, []);

    if(profiles.length == 0){
        return <p>Loading...</p>
    }

    return (
        <>
            <ProfileList></ProfileList>
            <hr></hr>
            <AddProfile></AddProfile>
        </>
    );
}

export default ProfilesPage;