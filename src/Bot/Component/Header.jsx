import { IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React, { useContext } from "react";
import { FaRobot } from "react-icons/fa";
import { BotContext } from "../Utils/BotContext";

const Header = () => {
  const { openBot, setopenBot } = useContext(BotContext);

  return (
    <div className="botHeader">

      {/* <FaRobot
        style={{
          color: "white",
          fontSize: "2rem",
        }}
      /> */}
      
      <span>You Are Chatting With CC Bot</span>

      <IconButton
        onClick={() => setopenBot(false)}
        style={{
          padding: 0,
          marginLeft: "auto",
          color: "white",
        }}
      >
        <Cancel />
      </IconButton>
    </div>
  );
};

export default Header;
