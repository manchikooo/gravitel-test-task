import React from 'react';
import {ButtonStyles} from './ButtonStyles';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    disabled?: boolean
}

const Button = ({title, onClickHandler, disabled}: ButtonPropsType) => {
    return (
        <ButtonStyles
            title={title}
            onClick={onClickHandler}
            disabled={disabled}>
            {title}
        </ButtonStyles>
    );
};

export default Button;