import React from "react";

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {

    const lowerCase = message.toLowerCase();
    
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
