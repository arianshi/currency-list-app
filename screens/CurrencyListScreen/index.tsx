import React from 'react';
import CurrencyListModule from 'react-native-currency-lists';
import { useCurrency } from '../../context/currencyContext';

const CurrencyListScreen = () => {
  const { data } = useCurrency();
  return <CurrencyListModule metadata={{ data }} />;

};

export { CurrencyListScreen };
