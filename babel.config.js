module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          screens: './src/screens',
          storage: './src/storage',
          api: './src/api',
          common: './src/common',
          "common/*": ["common/*"],
          hooks: './src/hooks',
          modules: './src/modules',
          components: './src/components',
          utils: './src/utils',
          HOCs: './src/HOCs',
        },
      },
    ],
  ],
};
