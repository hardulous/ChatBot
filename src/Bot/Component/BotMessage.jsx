import React, { useEffect, useState } from "react";

const BotMessage = ({ loader, message }) => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, [2000]);
  }, []);

  return (
    <>
      <div className="botMessage">
        {loading ? loader : <span>{message}</span>}
      </div>
    </>
  );
};

export default BotMessage;
