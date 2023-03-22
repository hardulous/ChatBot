import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { FaRobot } from "react-icons/fa";
import img from "../../cclogo.jpg";

const BotAvatar = () => {
  
  return (
    <>
      <Avatar variant="circular" className="botAvatar">
        <FaRobot/>
      </Avatar>
    </>
  );
};

export default BotAvatar;
