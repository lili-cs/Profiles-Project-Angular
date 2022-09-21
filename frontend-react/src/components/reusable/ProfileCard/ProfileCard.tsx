import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { Profile } from '../../../interfaces/profile';
import { updateProfile, deleteProfile } from '../../../store/profileSlice';


function ProfileCard(id: any) {
    const [editing, setEditing] = useState(false);

    if(!id) {
        id = {id: ''};
    }
    const dispatch = useAppDispatch();
    const profile = useAppSelector(state => state.profile.profiles.filter(item => item._id === id.id)[0]);
    const [profilePicture, setProfilePicture] = useState(profile.profiles);
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);

    if(!id){
        return (<></>);
    }

    const saveHandler = () => {
        const updatedProfile: Profile = {
            _id: id.id,
            profilePicture: profilePicture,
            name: name,
            phone: phone,
            email: email
        };
        const data:any = {_id:profile._id, profile: updatedProfile};
        dispatch(updateProfile(data));
        setEditing(false);
    };

    const editHandler = () => {
        setEditing(true);
    };

    const deleteHandler = () => {
        dispatch(deleteProfile(profile._id));
    };

    return (
        // <>
            <div className='profile-row'>
                {!editing ? 
                    <>
                        <div>{profilePicture}</div>
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                        <div><button onClick={editHandler}>Edit</button></div>
                    </>
                :
                    <>
                        <input type='text' value={profilePicture} onChange={(e)=>setProfilePicture(e.target.value)}></input>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                        <div><button onClick={saveHandler}>Save</button></div>
                    </>
                }
                
                <div><button onClick={deleteHandler}>Delete</button></div>
            </div>
        // </>
    );
}

export default ProfileCard;