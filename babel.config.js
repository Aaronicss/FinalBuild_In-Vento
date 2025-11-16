// babel.config.js (The correct, simplified version)

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // 🛑 REMOVE THE PLUGINS SECTION ENTIRELY 🛑
  };
};