import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }: any) => {
  const [minutes, setMinutes] = useState(40);

  const value = {
    minutes,
    setMinutes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
