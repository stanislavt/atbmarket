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
      const { bgWhite, red: tRed, green: tGreen, bgGreen } = chalk;

      return { bgWhite, tRed, tGreen, bgGreen };
    } else {
      const { bgWhite, black: tRed, black: tGreen, black: bgGreen } = chalk;

      return { bgWhite, tRed, tGreen, bgGreen };
    }
  }

  set colorized(value) {
    this._colorized = Boolean(value);
  }

  get colorized() {
    return this._colorized;
  }
};
