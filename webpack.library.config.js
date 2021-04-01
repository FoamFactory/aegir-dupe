const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'aegir',
    libraryTarget: 'umd'
  },
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, './src/assets')
    }
  },
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx',
                      '@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.(png|jpe?g|svg|gif|woff|eot|woff2|ttf)$/i,
        use: [ 'url-loader' ]
      }
    ]
  }
}
