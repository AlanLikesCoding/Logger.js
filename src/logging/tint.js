const bg = require('../colors/background.js');
const fg = require('../colors/foreground.js');
const combine = require('../colors/combine.js');

const tint = {};

const background = () => {
  tint.bg = {};
  const keys = Object.keys(bg);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    tint.bg[key] = function (str) {
      return combine(bg[key]) + str + combine(0);
    }
  }
}

const foreground = () => {
  tint.fg = {};
  const keys = Object.keys(fg);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    tint.fg[key] = function (str) {
      return combine(fg[key]) + str + combine(0);
    }
  }
}

const init = () => {
  background();
  foreground();
}

init();


module.exports = tint;