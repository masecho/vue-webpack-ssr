// const docsLoader = require("./doc-loader")
module.exports = (isDev) => {
  return {
    // 消除空格
    preserveWhitespace: true,
    //将vue里面的css单独打包
    exractCSS: !isDev,

    cssModules: {

    },
    /*vue组件热重载，根据环境变量热重载*/
    // hotReload:false,
    // loaders:{
    //   'docs':docsLoader
    // }
  }
}