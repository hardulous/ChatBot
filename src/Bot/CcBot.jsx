import "./Utils/ccBot.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Utils/Config";
import MessageParser from "./Utils/MessageParser";
import ActionProvider from "./Utils/ActionProvider";
import { BotContext } from "./Utils/BotContext";
import { useContext, useEffect, useRef } from "react";
import { Collapse, Fade, Grow, IconButton } from "@material-ui/core";
import img from "../cclogo.jpg";
import { FaRobot } from "react-icons/fa";

function CcBot() {
  const { openBot, setopenBot } = useContext(BotContext);
  const botRef = useRef();

  useEffect(() => {

    if (openBot) botRef.current.classList.add("show");
    else botRef.current.classList.remove("show");

  }, [openBot]);


  return (
    <>
      <div className="App">
        <div className="botContainer" ref={botRef}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
        {!openBot && (
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
