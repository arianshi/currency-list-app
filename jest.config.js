module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-clone-referenced-element' +
      '|react-native-vector-icons' +
      ')/)',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'lcov', 'text'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
