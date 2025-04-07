import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CurrencyItem = {
	id: string;
	name: string;
	symbol: string;
	code?: string
  };

  type CurrencyContextType = {
	data: CurrencyItem[];
	setData: (data: CurrencyItem[]) => void;
  };

  const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

  export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<CurrencyItem[]>([]);
	return (
		<CurrencyContext.Provider value={{ data, setData }}>
			{children}
		</CurrencyContext.Provider>
	);
  };

  export const useCurrency = (): CurrencyContextType => {
	const context = useContext(CurrencyContext);
	if (!context) {throw new Error('useCurrency must be used within a CurrencyProvider');}
	return context;
  };
