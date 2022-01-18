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

    if (!env.dev && env.target === 'web') {
      const miniCssExtractPlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
      if (miniCssExtractPlugin && miniCssExtractPlugin.options) {
        miniCssExtractPlugin.options.ignoreOrder = true;
      }
    }

    if (!env.dev && config.optimization.splitChunks) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.s?css$/,
        chunks: 'all',
        minChunks: 1,
        reuseExistingChunk: true,
        enforce: true,
      };
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
