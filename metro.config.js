const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
<<<<<<< HEAD
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
=======
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
>>>>>>> origin/main
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
