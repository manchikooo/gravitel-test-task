import styled from "styled-components";

export const ButtonStyles = styled.button`
  position: ${({title}) => title === 'Выйти' ? 'absolute' : 'relative'};
  top: ${({title}) => title === 'Выйти' && '3%'};
  right: ${({title}) => title === 'Выйти' && '3%'};
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  padding: 10px 30px;
  overflow: hidden;
  border: 1px solid #F9C76A;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #F9C76A;
  transition: .2s ease-in-out;

  &:disabled {
    background-color: white;
    cursor: unset;
  }

  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }

  &:hover {
    background: #F9C76A;
    color: #fff;
  }

  &:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
  }

  &:disabled {
    background-color: white;
    color: #F9C76A;
    cursor: unset;
  }

  &:disabled:before {
    background: linear-gradient(90deg, rgba(249, 199, 106, .1), rgba(249, 199, 106, .5));
    color: #F9C76A;
    cursor: unset;
  }
`;