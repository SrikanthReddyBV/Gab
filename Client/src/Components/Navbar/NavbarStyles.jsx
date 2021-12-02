import styled from "styled-components";

export const NavDiv = styled.div`
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  min-height: 53px;
  width: 100%;
  position: fixed;
  z-index: 3;
`;
export const NavContainer = styled.div`
  margin: 0 5% 0 5%;
  display: flex;
  flex-direction: row;
`;
export const NavLogoDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
  width: 7%;
  height: 60%;
  padding: 10px;
`;

export const NavLogo = styled.img`
  width: 100%;
`;

export const SearchBar = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  background: ${(props) => props.theme.colors.background1};
  margin: 10px 0 10px 0;
  width: ${(props) => (props.isLoggedIn ? "25%" : "40%")};
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

export const SearchInp = styled.input`
  background: ${(props) => props.theme.colors.background1};
  outline: none;
  border: none;
  margin: 5px 10px 0 10px;
  font-size: 12px;
  height: 80%;
  width: ${(props) => (props.isLoggedIn ? "290px" : "640px")};
  color: ${(props) => props.theme.colors.input};
`;

export const SearchIcon = styled.div`
  height: 80%;
  margin: 9px 9px 9px;

  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  margin: 5px 0 0 0;
  display: ${(props) => (props.isLoggedIn ? "flex" : "none")};
  flex-direction: row;
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 15px 0 15px;

  border-bottom: ${(props) =>
    props.isSelected ? "3px solid #21cf7a" : "none"};
  &:hover {
    cursor: pointer;
  }
`;

export const NavMenuItemText = styled.div`
  color: ${(props) =>
    props.theme.colors.background2 === "#FFFFFF" ? "#000000" : "#FFFFFF"};
  font-size: 10px;
  font-weight: lighter;
`;

export const EmptyDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  width: 28%;
`;

export const VerticalSeparater = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  margin: 12px 10px 12px 10px;
  height: 40%;
  width: 2px;
  background: #999999;
`;

export const NavMenuRoundedItem = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background1};
  height: 40px;
  width: 40px;
  margin: 7px 5px 0 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const NavRoundedDiv = styled.div`
  padding: 7px 0 0 0;
  margin-left: 7px;
`;

export const NavUserPic = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const NavLogin = styled.button`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background2};
  width: 150px;
  height: 40px;
  border-radius: 25px;
  margin: 10px 10px 0 10px;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
  }
`;

export const NavSignup = styled.button`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.primary};
  width: 150px;
  height: 40px;
  border-radius: 25px;
  margin: 10px 10px 0 0;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

export const UserPop = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ProfilePopUp = styled.div`
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    ${(props) => props.theme.colors.background1} 0px 0px 0px 1px;
  right: 10%;
  border-radius: 5px;
  position: absolute;
  background: ${(props) => props.theme.colors.background2};
`;

export const ProfilePopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text2};
  background: ${(props) => props.theme.colors.background2};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.background1};
  }
`;

export const PopDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.background1};
`;

export const NotificationDot = styled.div`
  color: #ffffff;
  font-size: 12px;
  background: #f23c3c;
  border-radius: 2px;
  position: absolute;
  top: 10%;
  right: 16%;
  padding: 2px 5px;
  border-radius: 50%;
  background: red;
  color: white;
`;
