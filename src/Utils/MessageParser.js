import React from "react";

// This message parser render everytime when user enter the input 

const MessageParser = (props) => {

  const { children, actions } = props;

  console.log(props.children.props.state); // here this state contain all messages either come from user and bot and whatever initial state we pass in config.js

  // All the message that user type in a chatBox will be parsed in this function and based on input message we will execute the function
  const parse = (message) => {
    const lowerCase = message.toLowerCase();  // now handled both lowerCase and Uppercase input by user

    if (lowerCase.includes("hello")) {
      actions.handleHello();
    }

    if (lowerCase.includes("dog")) {
      actions.handleDog();
    }

    if (lowerCase.includes("todos")) {
      actions.handleTodos();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
