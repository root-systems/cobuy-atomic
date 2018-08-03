module.exports = {
  module: {
    rules: [
      {
        test: /stories\.js$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                printWidth: 80,
                singleQuote: false,
              }
            }
          },
          {
            loader: require('./mui-theme-loader')
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.svg$/,
        loader: 'svg-path-loader',
      }
    ]
  }
}