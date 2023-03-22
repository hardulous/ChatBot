import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { FaRobot } from "react-icons/fa";
import img from "../../cclogo.jpg";

const BotAvatar = () => {
  return (
    <>
      <IconButton className="botBtn2" size="medium" disableFocusRipple disableTouchRipple>
        <FaRobot />
      </IconButton>
    </>
  );
};

export default BotAvatar;
