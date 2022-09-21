import React from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Profile } from '../../interfaces/profile';
import ProfileCard from '../reusable/ProfileCard/ProfileCard';


function ProfileList(){
    // console.log(allProfiles);
    // const profiles = [allProfiles];
    const profiles: Profile[] = useAppSelector((state) => state.profile.profiles);
    console.log('profiles in ProfileListComponent: ' + profiles);

    const checkProfiles = ():boolean => {
        if(profiles.length === 0){
            return false;
        }
        else{
            return true;
        }
    };

    return (
        <>
            <h1>Profile List</h1>
            <div className='profile-row profile-row-header'>
                <div>Profile Picture</div>
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div></div>
                <div></div>
            </div>
            {checkProfiles() && profiles.map(profile => (
                <ProfileCard key={profile._id} id={profile._id}></ProfileCard>
            ))}
        </>
    );
}


export default ProfileList;