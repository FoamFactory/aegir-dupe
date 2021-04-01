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
    config.module.rules = [
      {
        test: /\.md$/,
        use: {
          loader: 'raw-loader'
        }
      },
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env'],
             plugins: ['@babel/plugin-transform-react-jsx',
                       '@babel/plugin-proposal-class-properties' ]
           }
         }
       },
       {
         test: /\.(css|scss)$/,
         use: ['style-loader', 'css-loader', 'sass-loader'],
         include: path.resolve(__dirname, '../src')
       },
       {
         test: /\.(png|jpe?g|svg|gif|woff|eot|woff2|ttf)$/i,
         use: [ 'url-loader' ]
       }
    ];

    config.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    config.resolve.alias = {
      '@Assets': path.resolve(__dirname, '../src/assets/')
    };

    return config;
  }
}
