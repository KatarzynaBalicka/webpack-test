const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    jap_main: "./src/js/jap_main.js",
    jap_exercise_main: "./src/js/jap_exercise/jap_exercise_main.js",
    jap_grammar_main: "./src/js/jap_grammar/jap_grammar_main.js",
    jap_vocabulary_main: "./src/js/jap_vocabulary/jap_vocabulary_main.js",
    navigation_button: "./src/js/navigation_button",
    jap_vocabulary_sorted: "./src/js/jap_vocabulary/jap_vocabulary_sorted.js",
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
      template: "./src/pages/jap_main.html",
      //gdzie ma szukać danej strony; pod jakim absolutnym adresem jakim ona się znajduje
      inject: true,
      chunks: ["jap_main"],
      //są pobierane z powyższych punktów wejścia (entry) javascriptu (w pliku javascript dodaje się formaty ostylowania strony poprzez zainportowanie pliku scss)
      filename: "Welcome",
      //nazwa, którą kompilator będzie się posługiwał zamiast linku (template); tej nazwy należy używać, od tej pory w innych plikach zamiast właściwego linku
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_exercise/jap_exercise_main.html",
      inject: true,
      chunks: ["jap_exercise_main"],
      filename: "Exercises",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_grammar/jap_grammar_main.html",
      inject: true,
      chunks: ["jap_grammar_main"],
      filename: "Grammar",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_vocabulary/jap_vocabulary_main.html",
      inject: true,
      chunks: ["jap_vocabulary_main"],
      filename: "Vocabulary",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jap_vocabulary/jap_vocabulary_sorted.html",
      inject: true,
      chunks: ["jap_vocabulary_sorted"],
      filename: "VocabularyTopics",
    }),
  ],
};
