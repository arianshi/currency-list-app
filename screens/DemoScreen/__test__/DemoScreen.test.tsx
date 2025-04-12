import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { DemoScreen } from '../index';
import { useCurrency } from '../../../context/currencyContext';
import { useNavigation } from '@react-navigation/native';
import { cryptoList, fiatList } from '../../../db';

describe('DemoScreen', () => {
  const setDataMock = jest.fn();
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useCurrency as jest.Mock).mockReturnValue({ setData: setDataMock });
    (useNavigation as jest.Mock).mockReturnValue({ navigate: navigateMock });
    (Alert.alert as jest.Mock).mockClear();
    setDataMock.mockClear();
  });

  it('clears the data when "Clear DB" is pressed', () => {
    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Clear DB'));

    expect(setDataMock).toHaveBeenCalledWith([]);
    expect(Alert.alert).toHaveBeenCalledWith('Data cleared');
  });

  it('inserts one item when "Insert Data" is pressed', () => {
    (useCurrency as jest.Mock).mockReturnValue({
      setData: (fn: any) =>
        fn([]), // simulate previous state as empty array
    });

    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Insert Data'));

    expect(Alert.alert).toHaveBeenCalledWith(expect.stringContaining('Inserted one item:'), expect.any(String));
  });

  it('loads crypto list when "Show Crypto" is pressed', () => {
    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Show Crypto'));

    expect(setDataMock).toHaveBeenCalledWith(expect.arrayContaining(cryptoList));
    expect(Alert.alert).toHaveBeenCalledWith('Crypto data loaded');
  });

  it('loads fiat list when "Show Fiat" is pressed', () => {
    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Show Fiat'));

    expect(setDataMock).toHaveBeenCalledWith(expect.arrayContaining(fiatList));
    expect(Alert.alert).toHaveBeenCalledWith('Fiat data loaded');
  });

  it('loads all data when "Show All" is pressed', () => {
    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Show All'));

    expect(setDataMock).toHaveBeenCalledWith(expect.arrayContaining([...cryptoList, ...fiatList]));
    expect(Alert.alert).toHaveBeenCalledWith('All data loaded');
  });

  it('navigates to CurrencyList when button is pressed', () => {
    const { getByText } = render(<DemoScreen />);
    fireEvent.press(getByText('Go to Currency List'));

    expect(navigateMock).toHaveBeenCalledWith('CurrencyList');
  });
});
