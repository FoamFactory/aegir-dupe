// This babel configuration is for jest testing ONLY! It is not imported into
// webpack for either the library build or the storybook build.
// For storybook, see: .storybook/main.js
// For library, see: webpack.library.config.js
module.exports = api => {
  // The process.env.NODE_ENV environment variable is set to 'test' when jest
  // starts, IF it isn't set to something else already.
  const isTest = api.env('test');
  return {
    presets: isTest ? ['@babel/preset-env'] : [],
    plugins: isTest ? ['@babel/plugin-transform-react-jsx'] : []
  };
};
