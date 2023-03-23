import { Avatar } from "@material-ui/core";
import React from "react";
import { FaUser } from "react-icons/fa";

const UserAvatar = () => {
  return (
    <Avatar variant="circular" className="botAvatar">
      <FaUser/>
    </Avatar>
  );
};

export default UserAvatar;
