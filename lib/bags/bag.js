const chalk = require('chalk');

module.exports = class Bag {
  /**
  * @param {object} options
  * @param {boolean=true} options.colorized
  */
  constructor({ colorized = true }) {
    this.colorized = colorized;
  }

  /**
  * Print the bag with capture
  */
  chalk(){
    this.draw().caption();
  }

  /**
  * Set colors of the bag
  */
  get colors() {
    if (this.colorized) {
      const { bgWhite, bgBlue, white: tWhite, blue: tBlue, magenta: tRed } = chalk;

      return { bgWhite, bgBlue, tWhite, tBlue, tRed };
    } else {
      const { bgWhite, bgBlackBright: bgBlue, white: tWhite, black: tBlue, black: tRed } = chalk;

      return { bgWhite, bgBlue, tWhite, tBlue, tRed };
    }
  }

  set colorized(value) {
    this._colorized = Boolean(value);
  }

  get colorized() {
    return this._colorized;
  }
};
