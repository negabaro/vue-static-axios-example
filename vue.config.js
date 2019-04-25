const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  //assetsDir: "/",
  configureWebpack: {
    performance: {
      maxAssetSize: 500000
    },
    plugins: [new CopyWebpackPlugin([{ from: "public/", to: "pepe" }])]
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src/vue/app"));
  },
  publicPath: "/hoge/",
  //http://localhost:8080/hoge/test.json
  //http://localhost:8080/test.json
  pages: {
    index: {
      // entry for the page
      entry: "src/vue/app/main.ts",
      // the source template
      template: "src/vue/app/public/index.html"
      // output as dist/index.html
      //filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      //title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    //subpage: 'src/subpage/main.js'
  }
};
