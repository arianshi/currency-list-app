import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DemoScreen } from './screens/DemoScreen';
import { CurrencyListScreen } from './screens/CurrencyListScreen';
import { CurrencyProvider } from './context/currencyContext/index';

export type RootStackParamList = {
  Demo: undefined;
  CurrencyList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CurrencyProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(13,19,37)',
          },
          headerTintColor: '#fff',
        }} >
          <Stack.Screen name="Demo" component={DemoScreen} />
          <Stack.Screen name="CurrencyList" component={CurrencyListScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CurrencyProvider>
  );
}
