const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// ----- Configure Node Module CommonJS -----

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

// ----- Node Server Configuration -----

const SERVER_BUILD_DIR = path.join(__dirname, 'dist/');
const SERVER_SRC_DIR = path.join(__dirname, 'server/');
const COMMON_SRC_DIR = path.join(__dirname, 'common/');

const serverConfig = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
    process: true
  },
  entry: `${SERVER_SRC_DIR}app.js`,
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.bundle.js'
  },
  module: {
    loaders: [{
      // regex includes both .js & .jsx
      test: /.js$|.jsx$/,
      include: [
        SERVER_SRC_DIR,
        COMMON_SRC_DIR
      ],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.IgnorePlugin(/\.(css|less|sass|scss)$/)
  ],
  devtool: 'sourcemap'
};

module.exports = [
  serverConfig
];
