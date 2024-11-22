
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  experiments: {
      futureDefaults: true,
      asyncWebAssembly: true,
      css: true,
      lazyCompilation: isDev,
      incremental: isDev,
  },
};
