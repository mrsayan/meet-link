module.exports = {
  mode: "production",
  devServer: {
    static: './dist'
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            use: [{ loader: "babel-loader" }],
            exclude: /node_modules/
        }

    ]
  }
}
