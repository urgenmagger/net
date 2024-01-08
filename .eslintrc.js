module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
