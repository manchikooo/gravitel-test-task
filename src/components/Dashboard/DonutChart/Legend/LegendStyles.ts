import styled from "styled-components";

type LegendStyledProps = {
    pieIndex: number
    color: string
    currentIndex: number | null
}

export const LegendStyled = styled.div<LegendStyledProps>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({pieIndex, currentIndex, color}) => pieIndex === currentIndex && color};
  font-weight: ${({pieIndex, currentIndex}) => pieIndex === currentIndex ? 900 : 500};
  padding: 10px 0;
`;