const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
  },
  {
    entry: './src/components/HelloWorld.vue',
    output: {
      filename: 'main.vue',
      path: path.resolve(__dirname, 'dist'),
    },
  },
];