module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: ['**/__tests__/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': 'identity-obj-proxy'
  }
}