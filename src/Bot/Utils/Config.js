import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Component/BotAvatar";
import Header from "../Component/Header";

const config = {
  botName: "LearningBot",

  initialMessages: [
    createChatBotMessage(`Hello How Can I Help You ?`),
  ],

  customComponents: {
   
   header: (props) => <Header {...props} />,
 
   botAvatar: (props) => <BotAvatar {...props} />,
   
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   
  //  userAvatar: (props) => <MyCustomAvatar {...props} />,
   
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },

};

export default config;
