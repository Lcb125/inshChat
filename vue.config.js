const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const name = 'ChatGPT Stream' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port =  8089 // dev port

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    // 自动打开浏览器
    open: false,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      
      "/api": {
        target: "http://150.158.173.37:8000",
        changeOrigin: true,
        ws:false,
        },
      // "/api": {
      //   target: "https://digital-insurance-ui-backend-gsde-dev-gamma.ikp101x.cloud.hk.hsbc",
      //   changeOrigin: true,
      //   ws:false,
      // },

    }

  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

}

