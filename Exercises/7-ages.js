'use strict';

const ages = (persons) => {
  const result = {};

  for (const key in persons) {
    const person = persons[key];
    result[key] = person.died - person.born;
  }

  return result;
};

module.exports = { ages };