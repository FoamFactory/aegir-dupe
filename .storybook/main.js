const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@etchteam/storybook-addon-status/register'
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@Assets'] = path.resolve(__dirname, '../src/assets/');

    return config;
  }
}
