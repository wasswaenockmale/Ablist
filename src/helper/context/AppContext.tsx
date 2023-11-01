import React, { createContext, useState } from 'react';

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  isLoading: boolean;
  setIsLoading: () => void;
}

export const AppContext = createContext<AppContextType>({
  isLoading: false,
  setIsLoading: () => { },
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contextValue: AppContextType = {
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
