import React, { useContext } from "react";
import "./TopBarDash.css";
import { ExitToApp } from "@material-ui/icons";
import { userContext } from "../../../App";
import { Tooltip, Zoom } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const TopBarDash = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
    setLoggedInUser({});
    history.push("/");
  };
  return (
    <div className="container bg-white pt-2 pb-2">
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="topDashLogo">
              {loggedInUser.displayName || loggedInUser.name}
            </span>
          </div>
          <div className="topRight">
            <img
              src="https://i.ibb.co/CzkSST0/avater.png"
              alt="avatar"
              className="topAvatar"
            />
            <Tooltip
              className="topbarIconContainer"
              TransitionComponent={Zoom}
              title="Log out!"
            >
              <ExitToApp onClick={handleLogOut} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarDash;
