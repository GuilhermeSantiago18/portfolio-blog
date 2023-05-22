'use client';

import { createContext, useState, ReactNode } from "react";

type GlobalContextData = {
  disabled: boolean;
  setDisabled: (newValue: boolean) => void;

}

type AppContextProviderProps = {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({
    disabled: false,
    setDisabled: () => {},
});

const GlobalProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [disabled, setDisabled] = useState(false);


  const contextValue: GlobalContextData = {
    disabled,
    setDisabled,

  };

  return (
    <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };