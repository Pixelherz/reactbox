const path = require('path')

const config = {
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

const output = {
  library: {
    name: '@pixelherz/reactbox',
    type: 'commonjs2',
  },
  globalObject: 'this',
}

const scrollDistanceObserverConfig = Object.assign({}, config, {
  name: 'scroll-distance-observer',
  entry: path.resolve(
    __dirname,
    'src/ScrollDistanceObserver/ScrollDistanceObserver.js'
  ),
  output: Object.assign({}, output, {
    path: path.resolve(__dirname, 'dist/ScrollDistanceObserver'),
    filename: 'ScrollDistanceObserver.js',
    library: '_pixelherz_reactbox_scroll_distance_observer',
  }),
})

const scrollOffsetObserverConfig = Object.assign({}, config, {
  name: 'scroll-offset-observer',
  entry: path.resolve(
    __dirname,
    'src/ScrollOffsetObserver/ScrollOffsetObserver.js'
  ),
  output: Object.assign({}, output, {
    path: path.resolve(__dirname, 'dist/ScrollOffsetObserver'),
    filename: 'ScrollOffsetObserver.js',
    library: '_pixelherz_reactbox_scroll_offset_observer',
  }),
})

module.exports = [scrollDistanceObserverConfig, scrollOffsetObserverConfig]
