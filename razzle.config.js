module.exports = {
  modify: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    // config.module.rules.push(
    //   {
    //     test: /\.md$/,
    //     loader: 'emit-file-loader',
    //     options: {
    //       name: 'dist/[path][name].[ext]',
    //     },
    //   });
    // config.module.rules.push(
    //   {
    //     test: /\.md$/,
    //     loader: 'raw-loader',
    //   },
    // );
    return config;
  },
};
