// eslint-disable-next-line import/no-extraneous-dependencies
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const path = require('path');

module.exports = {
  plugins: ['scss', 'mdx'],

  modifyWebpackConfig({ env, webpackConfig }) {
    const config = { ...webpackConfig };
    config.performance = {
      maxAssetSize: 512,
      maxEntrypointSize: 512,
      hints: false,
    };

    if (env.target === 'web') {
      const miniCssExtractPlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    if (env.target === 'web') {
      const filename = path.resolve(__dirname, 'build');

      config.plugins.push(
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      );
    }

    return config;
  },
};
