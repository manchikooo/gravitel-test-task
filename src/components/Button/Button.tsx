import React from 'react';
import {ButtonStyled} from './ButtonStyled';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    disabled?: boolean
}

const Button = ({title, onClickHandler, disabled}: ButtonPropsType) => {
    return (
        <ButtonStyled
            title={title}
            onClick={onClickHandler}
            disabled={disabled}>
            {title}
        </ButtonStyled>
    );
};

export default Button;