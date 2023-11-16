import React, { createContext, useState } from 'react';
import codeTipsData from "../../utils/data/codeTipsData.json"

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  codeTips: any[]
  setCodeTips: React.Dispatch<React.SetStateAction<any[]>>
}

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  setIsLoading: () => { },
  codeTips: [],
  setCodeTips: () => {}
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [codeTips, setCodeTips] = useState<any[]>(codeTipsData);
  const contextValue: AppContextType = {
    isLoading,
    setIsLoading,
    codeTips,
    setCodeTips
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
