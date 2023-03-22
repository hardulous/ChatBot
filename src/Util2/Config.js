import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../Components2/LearningOptions";
import LinkList from "../Components2/LinkList";

const config = {
  botName: "LearningBot",

  initialMessages: [createChatBotMessage(`Hello What do you want to learn today ?`,{
    widget:"learningOptions"
  })],

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {    // props to be passed to LinkList component
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
