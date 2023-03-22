import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("hello")) {
      actions.Greet();
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
