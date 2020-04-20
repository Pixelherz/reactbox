const path = require('path')

var config = {
  mode: 'production',
  module: {},
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
}

const scrollDistanceObserverConfig = Object.assign({}, config, {
  name: 'scroll-distance-observer',
  entry: path.resolve(
    __dirname,
    'src/ScrollDistanceObserver/ScrollDistanceObserver.js'
  ),
  output: {
    path: path.resolve(__dirname, 'dist/ScrollDistanceObserver'),
    filename: 'ScrollDistanceObserver.js',
    library: '@pixelherz/reactbox/scroll-distance-observer',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
  },
})

module.exports = [scrollDistanceObserverConfig]
