const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.PUBLIC_URL || "",
  devServer: {
    proxy: 'https://api.panaceadayz.com/v2',
    historyApiFallback: true,
    // credentials: true
  },
  outputDir: 'dist',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
          @import "@/assets/sass/_colors.sass"
        `
      }
    }
  }
})