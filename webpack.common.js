const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    jap_main: "./src/js/jap_main.js",
    jap_exercise_main: "./src/js/jap_exercise_main.js",
    jap_grammar_main: "./src/js/jap_grammar_main.js",
    jap_vocabulary_main: "./src/js/jap_vocabulary_main.js",
    navigation_button: "./src/js/navigation_button",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_main.html",
      inject: true,
      chunks: ["jap_main"],
      filename: "jap_main.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_exercise/jap_exercise_main.html",
      inject: true,
      chunks: ["jap_exercise_main"],
      filename: "jap_exercise_main.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_grammar/jap_grammar_main.html",
      inject: true,
      chunks: ["jap_grammar_main"],
      filename: "jap_grammar_main.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_vocabulary/jap_vocabulary_main.html",
      inject: true,
      chunks: ["jap_vocabulary_main"],
      filename: "jap_vocabulary_main.html",
    }),
  ],
};
