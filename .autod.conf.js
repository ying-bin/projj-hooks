'use strict';

module.exports = {
  write: true,
  prefix: '^',
  dep: [
  ],
  devdep: [
    'autod',
    'eslint',
    'eslint-config-egg',
  ],
  exclude: [
    './dist',
  ],
  registry: 'https://r.cnpmjs.org',
};
