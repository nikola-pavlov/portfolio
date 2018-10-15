const path = require("path");

module.exports = {
  entry: {
    app: "./public/assets/scripts/App.js",
    vendor: "./public/assets/scripts/Vendor.js"
  },
  output: {
    filename: "[name].js",
    // path: "./public/temp/scripts"
    path: path.resolve(__dirname, "./public/temp/scripts")
  }
};