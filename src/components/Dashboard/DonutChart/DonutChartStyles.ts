import styled from "styled-components";

export const DonutChartWrapper = styled.div`
  padding: 20px;
`;

export const DonutChartBlock = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  svg {
    overflow: unset;
`;

export const LegendsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PieValueBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const PieValueTexted = styled.span`
  color: ${({color}) => color};
  font-weight: 400;
  font-size: 25px;
`;