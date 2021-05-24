const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");

process.env.BROWSER = "none";

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
            },
            javascriptEnabled: true
          }
        }
      }
    },
    {plugin: CracoAntDesignPlugin }
  ]
};