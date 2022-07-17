import styled from "styled-components";

export const LoaderBlock = styled.div`
  position: absolute;
  background-color: #F9C76A;
  overflow: hidden;
  width: 100%;
  height: 3px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  z-index: 100000;
`;

export const LoaderElement = styled.div`
  height: 3px;
  width: 100%;
  background: #A88135;

  &:before {
    content: '';
    display: block;
    background-color: #F9C76A;
    height: 3px;
    width: 0;
    animation: getWidth 0.7s ease-in infinite;
  }

  @keyframes getWidth {
    100% {
      width: 100%;
    }
  }
`;