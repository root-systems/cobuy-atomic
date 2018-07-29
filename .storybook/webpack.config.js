module.exports = {
  module: {
    rules: [
      {
        test: /stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader'),require('./mui-theme-loader')],
        enforce: 'pre',
      },
    ],
  },
};