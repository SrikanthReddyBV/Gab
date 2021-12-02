import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { AuthContext } from "../../Contexts/AuthContext";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdNotifications, MdGroups, MdLightbulb } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import {
  NavContainer,
  NavDiv,
  SearchInp,
  NavLogo,
  NavLogoDiv,
  SearchBar,
  SearchIcon,
  NavMenuContainer,
  NavMenuItem,
  NavMenuItemText,
  EmptyDiv,
  VerticalSeparater,
  NavMenuRoundedItem,
  NavRoundedDiv,
  NavUserPic,
  NavLogin,
  NavSignup,
  ProfilePopUp,
  ProfilePopDiv,
  PopDivider,
  NotificationDot,
} from "./NavbarStyles";
import { useHistory } from "react-router";

import { useLocation } from "react-router-dom";

import axios from "axios";

export const Navbar = ({ page }) => {
  const { handleTheme, theme } = useContext(ThemeContext);
  const [q, setQ] = useState("");
  const [toggleValue, setToggleValue] = useState(true); //

  const { isLoggedIn, user, handleSignout } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const handleSearch = async () => {
    if (location.pathname !== "/search") history.push(`/search?q=${q}`);
    else {
      history.push(`/search?q=${q}`);
      window.location.reload();
    }
  };
  const handleSetNot = async () => {
    await axios.patch("http://localhost:2222/users/" + user._id, {
      notifications: [],
    });
  };

  return (
    <>
      <NavDiv onMouseLeave={() => setToggleValue(true)}>
        <NavContainer>
          <NavLogoDiv onClick={() => history.push("/")}>
            <NavLogo
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gab_text_logo.svg/1200px-Gab_text_logo.svg.png"
            />
          </NavLogoDiv>

          <SearchBar isLoggedIn={isLoggedIn}>
            <SearchInp
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
              placeholder="Search for people or groups on gab"
            />
            <SearchIcon onClick={handleSearch}>
              <AiOutlineSearch
                size="1.5rem"
                color={theme === "light" ? "#21CF7A" : "#FFFFFF"}
              />
            </SearchIcon>
          </SearchBar>

          {/* Pass Is logged in  falg */}
          {isLoggedIn && <EmptyDiv isLoggedIn={isLoggedIn} />}

          <NavMenuContainer isLoggedIn={isLoggedIn}>
            {/* Pass is Selected flag */}

            <NavMenuItem
              onClick={() => history.push("/")}
              isSelected={"home" === page}
            >
              <div>
                <AiFillHome
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Home</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem
              onClick={() => history.push("/explore")}
              isSelected={"explore" === page}
            >
              <div>
                <BsGlobe2
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Explore</NavMenuItemText>
            </NavMenuItem>
            <NavMenuItem
              onClick={() => history.push("/news")}
              isSelected={"news" === page}
            >
              <div>
                <TiDocumentText
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>News</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItem
              onClick={() => history.push("/groups")}
              isSelected={"groups" === page}
            >
              <div>
                <MdGroups
                  size="1.3rem"
                  color={theme === "light" ? "#000000" : "#FFFFFF"}
                />
              </div>
              <NavMenuItemText>Groups</NavMenuItemText>
            </NavMenuItem>

            <NavMenuItemText>
              <VerticalSeparater />
            </NavMenuItemText>

            <NavMenuRoundedItem onClick={handleSetNot}>
              <NavRoundedDiv>
                <MdNotifications size="1.5rem" color="#999999" />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuRoundedItem>
              {user?.notifications?.length > 0 && (
                <NotificationDot></NotificationDot>
              )}
              <NavRoundedDiv>
                <IoChatbubblesSharp
                  onClick={() => history.push("/messanger")}
                  size="1.5rem"
                  color="#999999"
                />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuRoundedItem onClick={handleTheme}>
              <NavRoundedDiv>
                <MdLightbulb size="1.5rem" color="#999999" />
              </NavRoundedDiv>
            </NavMenuRoundedItem>

            <NavMenuItemText>
              <VerticalSeparater />
            </NavMenuItemText>

            <NavMenuRoundedItem onClick={() => setToggleValue(!toggleValue)}>
              {/* Popover */}
              <ProfilePopUp hidden={toggleValue}>
                <ProfilePopDiv onClick={() => history.push("/me")}>
                  <div>Profile</div>
                  <div>
                    <FaChevronRight />
                  </div>
                </ProfilePopDiv>
                <PopDivider />

                <ProfilePopDiv onClick={handleSignout}>
                  <div>Signout</div>
                  <div>
                    <FaChevronRight />
                  </div>
                </ProfilePopDiv>
                <PopDivider />
              </ProfilePopUp>

              <NavUserPic src={user?.profile_pic} alt="user" />
            </NavMenuRoundedItem>
          </NavMenuContainer>
          {!isLoggedIn && (
            <>
              <NavLogin
                isLoggedIn={isLoggedIn}
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </NavLogin>
              <NavSignup
                isLoggedIn={isLoggedIn}
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Signup
              </NavSignup>
            </>
          )}
        </NavContainer>
      </NavDiv>
    </>
  );
};
