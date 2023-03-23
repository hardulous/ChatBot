import React from "react";

const UserMessage = ({ message }) => {
  return (
    <>
      <div className="userMessage">
        <span>{message}</span>
      </div>
    </>
  );
};

export default UserMessage;
