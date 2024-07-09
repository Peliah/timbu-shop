import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
const InputBox = ({ name, type, id, value, placeholder, icon, rounded='rounded-lg' }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className='w-full relative'>
            <input
                name={name}
                type={type == "password" ? passwordVisible ? "text" : "password" : "text"}
                id={id}
                value={value}
                placeholder={placeholder}
                className={`border ${rounded} border-primary w-full py-3 pl-6`}

            />
            
            {icon ? <span className='absolute top-4 right-4'><img src={icon} alt="" /></span> : ''}
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