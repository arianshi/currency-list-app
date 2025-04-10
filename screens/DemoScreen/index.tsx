import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { cryptoList, fiatList, CurrencyItem } from '../../db/index';
import { useCurrency } from '../../context/currencyContext';

import styles from './styles';

const DemoScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { setData } = useCurrency();

  const handlePress = useCallback((label: string) => {
    switch (label) {
      case 'Clear DB':
        setData([]);
        Alert.alert('Data cleared');
        break;
      case 'Insert Data':
        setData((prev) => {
          const all = [...cryptoList, ...fiatList];
          const remaining = all.filter(item => !prev.some(existing => existing.id === item.id));

          if (remaining.length === 0) {
            Alert.alert('All items already inserted');
            return prev;
          }

          const randomItem = remaining[Math.floor(Math.random() * remaining.length)];
          Alert.alert('Inserted one item:', randomItem.id);
          return [...prev, randomItem];
        });
        break;

      case 'Show Crypto':
        setData(cryptoList);
        Alert.alert('Crypto data loaded');
        break;
      case 'Show Fiat':
        setData(fiatList);
        Alert.alert('Fiat data loaded');
        break;
      case 'Show All':
        setData([...cryptoList, ...fiatList]);
        Alert.alert('All data loaded');
        break;
    }
  }, [setData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demo Buttons</Text>

      {['Clear DB', 'Insert Data', 'Show Crypto', 'Show Fiat', 'Show All'].map((label) => (
        <TouchableOpacity key={label} style={styles.button} onPress={() => handlePress(label)}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('CurrencyList')}
      >
        <Text style={styles.primaryButtonText}>Go to Currency List</Text>
      </TouchableOpacity>
    </View>
  );
};

export { DemoScreen };
