import React from 'react';
import { render } from '@testing-library/react-native';
import { CurrencyListScreen } from '../index';
import { useCurrency } from '../../../context/currencyContext';
import CurrencyListModule from 'react-native-currency-list';

// Mock useCurrency hook
describe('CurrencyListScreen', () => {
	it('renders CurrencyListModule with correct metadata', () => {
		const mockData = [
		{ id: 'BTC', name: 'Bitcoin', symbol: 'BTC' },
		{ id: 'ETH', name: 'Ethereum', symbol: 'ETH' },
		];

		(useCurrency as jest.Mock).mockReturnValue({ data: mockData });

		render(<CurrencyListScreen />);

		expect((CurrencyListModule as jest.Mock).mock.calls[0][0]).toEqual({
		metadata: { data: mockData },
		});
	});
  });
