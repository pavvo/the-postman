import { PropsWithChildren, createContext, useState } from "react";

export interface AppContextType {
  defaultMessage: string;
  setDefaultMessage: (message: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultMessageFromEnv = import.meta.env.VITE_LOG_MESSAGE;

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [defaultMessage, setDefaultMessage] = useState(defaultMessageFromEnv);

  return <AppContext.Provider value={{ defaultMessage, setDefaultMessage }}>{children}</AppContext.Provider>;
};
