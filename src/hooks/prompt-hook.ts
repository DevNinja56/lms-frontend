import { useEffect } from "react";
import { useBlocker } from "react-router-dom";
import { useUi } from "./user-interface";

interface propsType {
  message: string;
  confirm?: () => void;
  cancel?: () => void;
}

export function usePrompt({ message, confirm, cancel }: propsType) {
  const { routeBlock } = useUi();
  const blocker = useBlocker(routeBlock)
  
  useEffect(() => {
    if (blocker.state === "blocked" && !routeBlock) {
      blocker.reset();
    }
  }, [blocker, routeBlock]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      const proceed = window.confirm(message);
      if (proceed) {
        blocker.proceed();
        confirm?.();
      } else {
        blocker.reset();
        cancel?.();
      }
    }
  }, [blocker, message]);
}
