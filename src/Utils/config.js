import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/BotAvatar";
import Dog from "../Components/Dog";
import Todos from "../Components/Todos";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],

  botName: "CC bot",

  customComponents: {
    // for displaying custom component

    botAvatar: (props) => <BotAvatar {...props} />,
  },

  customStyles: {
    // for changing css of chat box default component

    botMessageBox: {
      backgroundColor: "pink",
    },

    chatButton: {
      backgroundColor: "pink",
    },
  },

  state: {
    // any custom state we want to add chatBot and can be changed by setState function
    todos: [],
  },

  // Widgets are custom component that is registered in config because we want widget to be shown by chatBox based on user input
  widgets: [
    {
      widgetName: "todos", // name of this widget
      widgetFunc: (props) => <Todos {...props} />, // widget function to return jsx in ui
      mapStateToProps: ["todos"], // chat box state to be used in above widget component
    },
    {
      widgetName: "dog",
      widgetFunc: (props) => <Dog {...props} />,
    },
  ],
};

export default config;
