import React, { useEffect } from "react";

const MessageParser = ({ children, actions }) => {

  useEffect(() => {
    const inp = document.querySelector(".react-chatbot-kit-chat-input");
    const sendBtn = document.querySelector(".react-chatbot-kit-chat-btn-send");
    const form = document.querySelector(".react-chatbot-kit-chat-input-form");
    sendBtn.classList.add("disableSend");
    let val = "";
    form.addEventListener("keypress", (e1) => {
      if (!val && e1.key === "Enter") {
        e1.preventDefault();
      } else if (val && e1.key === "Enter") {
        val = "";
        sendBtn.classList.add("disableSend");
      }

      inp.addEventListener("input", (e2) => {
        val = e2.target.value;
        if (!Boolean(val)) {
          sendBtn.classList.add("disableSend");
        } else {
          sendBtn.classList.remove("disableSend");
        }
      });

      sendBtn.addEventListener("click", (e3) => {
        if (val) sendBtn.classList.add("disableSend");
      });
    });
  }, []);

  const parse = (message) => {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("hello")) {
      actions.handleHello();
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
