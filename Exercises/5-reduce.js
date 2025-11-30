'use strict';

const sum = (...args) => {
  return args.reduce((acc, v) => acc + v, 0);
};

module.exports = { sum };
