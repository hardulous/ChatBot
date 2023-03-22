import { Avatar } from "@material-ui/core";
import React from "react";
import { FaUser } from "react-icons/fa";

const UserAvatart = () => {
  return (
    <Avatar variant="circular" className="botAvatar">
      <FaUser/>
    </Avatar>
  );
};

export default UserAvatart;
