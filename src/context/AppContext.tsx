import { PropsWithChildren, createContext, useState } from "react";

export interface AppContextType {
  defaultMessage: string;
  setDefaultMessage: (message: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [defaultMessage, setDefaultMessage] = useState("Hello from");

  return <AppContext.Provider value={{ defaultMessage, setDefaultMessage }}>{children}</AppContext.Provider>;
};
