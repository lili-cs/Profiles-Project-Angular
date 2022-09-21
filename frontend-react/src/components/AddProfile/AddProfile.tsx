import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { createProfile } from '../../store/profileSlice';
import ReInputField from "../reusable/ReInputField/ReInputField";
import { Profile } from '../../interfaces/profile';


function AddProfile() {
    // const [isValid, setValid] = useState(true);
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        _id: {value: '', valid: false},
        profilePicture: {value: '', valid: false},
        name: {value: '', valid: false},
        email: {value: '', valid: false},
        phone: {value: '', valid: false}
    });

    // const valid = true;
    const validateInput = (e: any) => {
        const {name, value} = e.target;

        if(name === 'name'){
            const letters = /^[A-Za-z]+$/;
            if(value.match(letters)){
                return true;
            }
            else{
                return false;
            }
        }
        if(name === 'email'){
            const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if(regex.test(value)){
                return true;
            }
            else{
                return false;
            }
        }
        if(name === 'phone'){
            const phoneno = /^\d{10}$/;
            if(value.match(phoneno)){
                return true;
            }
            else{
                return false;
            }
        }
    }


    const handleChange = (e:any) => {
        const {name, value} = e.target;

        setFormData(prev => (
            {
                ...prev,
                [name]: {value: value, valid: validateInput(e)}
            }
        ));
        console.log(formData);

        validateInput(e);
    };

    const onSubmit = () => {
        const profile: Profile = {
            _id: '',
            profilePicture: formData.profilePicture.value,
            name: formData.name.value,
            email: formData.email.value,
            phone: formData.phone.value
        }
        dispatch(createProfile(profile));
    };

    return (
        <>
            <h1>Add Profile</h1>
            <form onSubmit={onSubmit}>
                {Object.entries(formData).map(([key, obj]) => {
                    const {value, valid} = obj;
                    if(key === '_id'){return <></>} 
                    return <ReInputField key={key} className={valid ? "greenColor" : "redColor"} type='text' value={value} id={key} name={key} onChange={handleChange}></ReInputField>
                })}

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default AddProfile;