/* eslint-disable global-require, no-unused-vars */

import React from 'react';

if (process.env.NODE_ENV === 'development' || __DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true, //  Logs every change, even expected ones like state/prop value changes
  });
}
