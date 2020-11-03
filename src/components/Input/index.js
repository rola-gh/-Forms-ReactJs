import React from 'react';

export default function Input(props) {
    const {name , labelText , type, value ,placeholder, handleInputChange , error} = props;
    return(
        <>
            <label htmlFor={name} className={'formGroup'}>{labelText}
            <input
                placeholder={placeholder}
                type={type}
                name ={name}
                id={name}
                value={value}
                onChange={handleInputChange}
            />
                {error &&<p className='error-msg'>{error}</p>}
            </label>
        </>
    )
}