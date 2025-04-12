jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));
// Mock icon
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
// mock hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('./context/currencyContext', () => ({
  useCurrency: jest.fn(),
}));
// mock alert
jest.mock('react-native/Libraries/Alert/Alert');
// mock component: allow props tracking
jest.mock('react-native-currency-list', () =>
  jest.fn((props) => {
    return null;
  })
);

