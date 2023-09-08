module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      alias: {
        "@src": "./src",
        "@screens": "./src/screens",
        "@components": "./src/components",
        "@context": "./src/context",
        "@navigation": "./src/navigation",
        "@hooks": "./src/hooks",
        "@assets": "./src/assets",
      }
    }]
  ]
};
