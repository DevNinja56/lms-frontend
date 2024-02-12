import React, { createContext, useState } from "react";
import { createCtx } from "./Context";

type PropsContextType = {
    currentQuizSubmissionId: string,
    setCurrentQuizSubmissionId: React.Dispatch<React.SetStateAction<string>>
};

export const [useProps, CtxProvider] = createCtx<PropsContextType>();

export const PropsContext = createContext<PropsContextType | undefined>(
  undefined
);

export const PropsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [currentQuizSubmissionId, setCurrentQuizSubmissionId] = useState<string>('');

  return (
    <CtxProvider
      value={{
        currentQuizSubmissionId,
        setCurrentQuizSubmissionId,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default PropsProvider;