import React, { createContext, useState } from "react";

export const BotContext = createContext();

export const BotProvider = ({ children }) => {
    
  const [openBot, setopenBot] = useState(false);

  return (
    <BotContext.Provider
      value={{
        openBot,
        setopenBot,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};
