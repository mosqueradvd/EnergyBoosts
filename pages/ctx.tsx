import { createContext, useState } from "react";

const AppContext = createContext(0);

export const AppContextProvider = ({ children }: any) => {
  const [minutes, setMinutes]: any = useState(0);

  const value: any = {
    minutes,
    setMinutes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
