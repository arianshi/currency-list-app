import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CurrencyItem } from '../../db';

  type CurrencyContextType = {
	data: CurrencyItem[];
	setData: React.Dispatch<React.SetStateAction<CurrencyItem[]>>;
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
