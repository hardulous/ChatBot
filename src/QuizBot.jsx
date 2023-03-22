import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Util2/Config";
import MessageParser from "./Util2/MessageParser";
import ActionProvider from "./Util2/ActionProvider";

function QuizBot() {
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

export default QuizBot;
