import { useHistory } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications, MdGroups } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

import React, { useContext } from "react";
import { BottomBar } from "./BottomNavStyles";
import { AuthContext } from "../../Contexts/AuthContext";

function BottomNav({ page }) {
  const history = useHistory();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BottomBar>
      <AiFillHome
        onClick={() => history.push("/")}
        size="1.3rem"
        color={page === "home" && "#21CF7A"}
      />
      {isLoggedIn && (
        <MdNotifications
          size="1.3rem"
          color={page === "notifications" && "#21CF7A"}
          onClick={() => history.push("/notifications")}
        />
      )}

      <MdGroups
        size="1.5rem"
        onClick={() => history.push("/groups")}
        color={page === "groups" && "#21CF7A"}
      />

      <BsGlobe2
        size="1.2rem"
        onClick={() => history.push("/explore")}
        color={page === "explore" && "#21CF7A"}
      />

      <TiDocumentText
        size="1.5rem"
        onClick={() => history.push("/news")}
        color={page === "news" && "#21CF7A"}
      />
      {isLoggedIn && (
        <FaUser
          size="1.2rem"
          onClick={() => history.push("/")}
          color={page === "user" && "#21CF7A"}
        />
      )}
    </BottomBar>
  );
}

export default BottomNav;
