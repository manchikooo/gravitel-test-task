import styled from "styled-components";

export const LoginBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  border: 1px solid #F9C76A;
  width: 35%;
  max-width: 500px;
  min-width: 330px;
  margin: 0 auto;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.h2`
  display: block;
  margin: 0;
  font-weight: 600;
  color: #555555;
`;

export const Input = styled.input`
  display: block;
  width: 65%;
  padding: 10px 10px;
  margin-top: 25px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #F9C76A;
  border-radius: 5px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #F9C76A;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(249, 199, 106, 0.25);
  }
`;
export const ErrorBlock = styled.div`
  height: 25px;
  font-weight: 500;
  color: red;
`;