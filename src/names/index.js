'use strict';

const data = require('./api/data.json');

const all = () => data;

const random = () => {
  const allNames = all();
  const randomIndex = Math.floor(Math.random() * allNames.length);
  return allNames[randomIndex];
};

module.exports = {
  all,
  random,
};
