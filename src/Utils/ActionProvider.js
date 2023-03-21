import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  // function to be executed based on user input from client and will be executed by MessageParser
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you."); // this function will create message to be sent by chatBot

    // Note if you have defined any custom state in config then must update state in Mutable fashion to avoid loss of state
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // now created chatBox message will be shown with 
  const handleDog = () => {  
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dog",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // now created chatBox message will be shown with 
  const handleTodos = () => {  
    const botMessage = createChatBotMessage(
      "Here's Your Today's Todos!",
      {
        widget: "todos",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, // this functions will be passed to Message Parser
            handleDog,
            handleTodos
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
