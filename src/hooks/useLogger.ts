import { useEffect } from "react";

export const useLogger = (message: string, componentName: string) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message, componentName]);
};
