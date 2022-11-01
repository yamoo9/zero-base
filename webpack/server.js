const serverConfig = {
  host: 'localhost',
  port: 3000,
  open: false,
  hot: true,
  liveReload: true,
  compress: true,
  historyApiFallback: true,
  static: ['public'],
  client: {
    overlay: true,
  },
};

export default serverConfig;
