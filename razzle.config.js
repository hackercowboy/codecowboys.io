module.exports = {
  plugins: ['scss', 'mdx'],

  modifyWebpackConfig(opts) {
    const config = { ...opts.webpackConfig };

    config.performance = {
      maxAssetSize: 1000,
      maxEntrypointSize: 300000,
      hints: false,
    };

    return config;
  },
};
