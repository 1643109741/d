const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
      "/api": {
        target: `http://localhost:8081/`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    historyApiFallback: true,
    allowedHosts: "all"
  }
})
