import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  "mode": "development",
  "devtool": "source-map",
  "entry": {
    "vendor": path.resolve(__dirname, 'src/vendor'),
    "main": path.resolve(__dirname, 'src/index')
  },

  "output": {
    "path": path.resolve(__dirname, 'dist'),
    "publicPath": "./",
    "filename": '[name].[contenthash].js'
  },
  "optimization": {
    "minimizer": [new TerserPlugin()],
    "splitChunks": {
      "chunks": 'async',
      "minSize": 30000,
      "maxSize": 0,
      "minChunks": 1,
      "maxAsyncRequests": 6,
      "maxInitialRequests": 4,
      "automaticNameDelimiter": '~',
      "cacheGroups": {
        "defaultVendors": {
          "test": /[\\/]node_modules[\\/]/,
          "priority": -10
        },
        "default": {
          "minChunks": 2,
          "priority": -20,
          "reuseExistingChunk": true
        },
        "vendor": {
          "name": "vendor",
          "minChunks": 3
        }
      }
    }
  },
  "plugins": [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new MiniCssExtractPlugin({
      "filename": '[name].[contenthash].css'
    })
  ],
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        "test": /\.css$/,
        "use": [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
}
