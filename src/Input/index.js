import React from "react";
import { InputWrapper } from "./style";
const Input = (props) => {
    const {type, name, value, onChange, placeholder} = props
    return(
        <React.Fragment>
            <InputWrapper>
                <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </InputWrapper>
        </React.Fragment>
    )
}

export default Input