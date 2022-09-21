import React, { useState } from "react";
import Props from '../../../interfaces/inputFieldProps';


export default function ReInputField(props:Props) {
    const {id, type, name, value, valid, onChange, className} = props;
    const [isValid, setValid] = useState(valid);

    return (
        <div>
            <label>{name}</label>
            <input className={className} id={id} name={name} type={type} value={value} onChange={onChange} />
        </div>
    )
}

