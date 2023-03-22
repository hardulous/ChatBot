import { Badge, IconButton } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React, { useContext } from "react";
import { FaRobot } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BotContext } from "../Utils/BotContext";

const Header = () => {
  const { openBot, setopenBot } = useContext(BotContext);

  return (
    <div className="botHeader">
      <IconButton
        className="botheader-icon"
        disableFocusRipple
        disableTouchRipple
        disableRipple
      >
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
          className="botHeader-badge"
          overlap="rectangular"
        >
          <FaRobot />
        </Badge>
      </IconButton>
      <div>
        <span
          style={{
            fontSize: "1.5rem",
          }}
        >
          CC ChatBot
        </span>
        <span
          style={{
            color: "#808080ba",
          }}
        >
          Online
        </span>
      </div>
      <IconButton onClick={() => setopenBot(false)}>
        <RxCross1 />
      </IconButton>
    </div>
  );
};

export default Header;
