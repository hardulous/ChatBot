import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Utils/config";
import MessageParser from "./Utils/MessageParser";
import ActionProvider from "./Utils/ActionProvider";

function ChatBot() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBot;
