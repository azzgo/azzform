module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        // 当使用 Vue CLI 来构建一个库或是 Web Component 时，推荐给 @vue/babel-preset-app 传入 useBuiltIns: false 选项
        useBuiltIns: false,
        polyfills: [
          "es.symbol",
          "es.array.iterator",
          "es.promise",
          "es.object.assign",
          "es.promise.finally",
        ],
      },
    ],
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        style: true, // or 'css'
        libraryDirectory: "lib",
      },
    ],
    "macros",
  ],
};
