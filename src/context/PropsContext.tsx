import React, { createContext, useState } from "react";
import { createCtx } from "./Context";
import { quizeResult } from "@utils/Types";

type PropsContextType = {
  quizResult: quizeResult[] | undefined;
  setQuizResult: React.Dispatch<React.SetStateAction<any | undefined>>;
};

export const [useProps, CtxProvider] = createCtx<PropsContextType>();

export const PropsContext = createContext<PropsContextType | undefined>(
  undefined
);

export const PropsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizResult, setQuizResult] = useState<quizeResult[]>();
  return (
    <CtxProvider
      value={{
        quizResult,
        setQuizResult,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default PropsProvider;
