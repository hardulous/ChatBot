import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const Greet = () => {
    const message = createChatBotMessage("Hello Friend");
    addMessageToState(message)
  };

  const handleJavascript = ()=>{
    const message = createChatBotMessage("Here is the list of link to learn javascript",{
      widget:"javascriptLinks"
    })
    addMessageToState(message)
  }

  const addMessageToState = (message) => {
    // this updation of state by setState is must to update the ui of chat box just creating message with createChatBoxMessage is not enough
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            Greet,
            handleJavascript
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
