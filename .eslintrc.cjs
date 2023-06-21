module.exports = {
  env: {
    // An environment provides predefined global variables.
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser', // An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable parsing JSX
    },
    ecmaVersion: 12, // ES2021
    sourceType: 'module', // Our code is composed of ECMAScript modules
  },
  plugins: ['react', '@typescript-eslint'], // Add React and TypeScript support into ESLint
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    'no-console': 'warn', // Throw an error if we have any console calls in the code
    eqeqeq: ['error', 'always'], // Always force the usage of ===
    '@next/next/no-html-link-for-pages': 0,
    // The following 2 rules can be disabled because React 17+ automatically
    // plugs the React variable globally and we don't need to import it anymore
    'react/jsx-uses-react': 'off', // Disallow React to be incorrectly marked as unused
    'react/react-in-jsx-scope': 'off', // Disallow missing React when using JSX
    'react/prop-types': 'off', // Disallow missing props validation in a React component definition ( we have TypeScript so no need for this )
    "@typescript-eslint/ban-ts-comment": "warn", // Allow TS Disable comments
    "@typescript-eslint/no-empty-function": "off",
  },
};

