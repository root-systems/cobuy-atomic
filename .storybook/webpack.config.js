const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => ({
  ...defaultConfig,
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /stories\.js$/,
        include: [
          path.resolve(__dirname, "../ui"),
          path.resolve(__dirname, "../domains")
        ],
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                printWidth: 80,
                singleQuote: true,
                parser: "babylon" 
              }
            }
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
})
