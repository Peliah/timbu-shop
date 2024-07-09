import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
const InputBox = ({ name, type, id, value, placeholder, icon }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className='w-full'>
            <input
                name={name}
                type={type == "password" ? passwordVisible ? "text" : "password" : "text"}
                id={id}
                value={value}
                placeholder={placeholder}
                className='border rounded-lg border-primary w-full py-3 '

            />
            {/* <span >
                {icon}
            </span> */}
            {/* {
                type == "password" ?
                    <span
                        onClick={() => setPasswordVisible(currentVal => !currentVal)}
                    >
                        {!passwordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                    </span>
                    : ""
            } */}
        </div>
    )
}

export default InputBox