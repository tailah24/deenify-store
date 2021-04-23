import React from 'react'
import './form-input.scss'

export default function FormInput({label, ...otherProps}) {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps}/>
            {label ? (
                <lable className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </lable>
            ): null}
            
        </div>
    ) 
}
