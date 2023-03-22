import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Component/BotAvatar";
import Header from "../Component/Header";
import UserAvatart from "../Component/UserAvatart";

const config = {
  botName: "LearningBot",

  initialMessages: [
    createChatBotMessage(`Hello How Can I Help You ?`),
  ],

  customComponents: {
   
   header: (props) => <Header {...props} />,
 
   botAvatar: (props) => <BotAvatar {...props} />,
   
  //  botChatMessage: (props) => <BotMessages {...props} />,
   
   userAvatar: (props) => <UserAvatart {...props} />,
   
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },

};

export default config;
