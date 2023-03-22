import "./Utils/ccBot.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Utils/Config";
import MessageParser from "./Utils/MessageParser";
import ActionProvider from "./Utils/ActionProvider";
import { BotContext } from "./Utils/BotContext";
import { useContext, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import img from "../cclogo.jpg";
import { FaRobot } from "react-icons/fa";

function CcBot() {
  const { openBot, setopenBot } = useContext(BotContext);
 
  return (
    <>
      <div className="App">
        {openBot ? (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        ) : (
          <IconButton
            className="botBtn"
            size="medium"
            color="primary"
            onClick={() => setopenBot(true)}
          >
            <FaRobot />
          </IconButton>
        )}
      </div>
    </>
  );
}

export default CcBot;
