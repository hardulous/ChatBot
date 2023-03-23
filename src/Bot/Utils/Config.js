import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Component/BotAvatar";
import BotMessage from "../Component/BotMessage";
import Header from "../Component/Header";
import UserAvatar from "../Component/UserAvatar";
import UserMessage from "../Component/UserMessage";

const config = {
  botName: "LearningBot",

  initialMessages: [
    createChatBotMessage(`Hello how are you ? I am the assitant chat bot developed by costa cloud to help to resolve your queries pls let me know what can i do for u.`),
  ],

  customComponents: {
   
   header: (props) => <Header {...props} />,
 
   botAvatar: (props) => <BotAvatar {...props} />,
   
   botChatMessage: (props) => <BotMessage {...props} />,
   
   userAvatar: (props) => <UserAvatar {...props} />,
   
   userChatMessage: (props) => <UserMessage {...props} />
 },

};

export default config;
