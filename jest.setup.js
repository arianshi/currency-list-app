
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

// Mock icon
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
