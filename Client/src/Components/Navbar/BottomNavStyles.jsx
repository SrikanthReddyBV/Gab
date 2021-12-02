import styled from "styled-components";

export const BottomBar = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
  }
  display: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: ${(props) => props.theme.colors.background1};

  &:hover {
    cursor: pointer;
  }
`;
