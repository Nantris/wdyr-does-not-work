module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo',
        {
          jsxRuntime: 'automatic',
          jsxImportSource: '@welldone-software/why-did-you-render',
        },
      ]
    ],
  };
};
