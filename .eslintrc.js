module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'import'
  ],
  parserOptions:  {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules:  {
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'require-await': 'error',
    'newline-after-var': 'error',
    'no-await-in-loop': 'off',
    'radix': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'newline-per-chained-call': 'off',
    'no-param-reassign': 'off',
    'no-bitwise': ['error', { 'allow': ['~'] }],
    'jsx-quotes': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],

    // react
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',

    // import
    'import/prefer-default-export': 'off',
  },
  env: {
    'browser': true,
    'jest/globals': true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect'
    }
  }
};
