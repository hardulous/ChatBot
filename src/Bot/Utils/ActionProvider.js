import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    
  const addMessageToState = (message) => {
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;
