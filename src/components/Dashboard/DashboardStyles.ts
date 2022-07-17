import styled from "styled-components";

export const DashboardWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const DashboardBlock = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 530px) {
    flex-direction: column;
    padding: 50px 10px;
  }
`;