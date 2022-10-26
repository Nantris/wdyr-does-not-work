module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo',
        {
          useTransformReactJSXExperimental: true
        },
      ]
    ],
    plugins: [
      ["@babel/plugin-transform-react-jsx", {
        runtime: "automatic",
        importSource: "@welldone-software/why-did-you-render",
        development: true,
      }],
    ]
  };
};
