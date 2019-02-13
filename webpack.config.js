// This library allows us to combine paths easily
const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'main.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
//    resolve: {
//       extensions: ['.js', '.jsx']
//    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        "presets": ["es2015", "react"],
                        "plugins": ["transform-class-properties"],
                        "sourceMaps": "inline",
                    }
                }
            }
        ]
    }
};
