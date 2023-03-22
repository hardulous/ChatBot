import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import CcBot from "./Bot/CcBot";
import { BotProvider } from "./Bot/Utils/BotContext";
// import ChatBot from "./ChatBot";
// import QuizBot from "./QuizBot";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <ChatBot /> */}
    {/* <QuizBot/> */}
    <BotProvider>
      <CcBot />
    </BotProvider>
  </React.StrictMode>
);
