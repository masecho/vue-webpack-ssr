const path = require("path");

const config = {
  target: "web",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]

      }
    ]
  }
}



module.exports = config;