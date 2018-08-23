const SIZE = require('./size');

module.exports = class Provision {
  /**
  * Create a new instance of plastic bag
  * @param {object} options
  * @param {string='middle'} options.size
  * @param {boolean=true} options.colorized
  */
  constructor({ size = SIZE.MIDDLE, colorized = true } = {}) {
    this.registerBags();
    this.size = size;
    this.colorized = colorized;

    return new this.currentBag({ colorized: this.colorized });
  }

  registerBags() {
    const sizes = [
      [SIZE.SMALL, require('./small')],
      [SIZE.MEDIUM, require('./medium')],
      [SIZE.LARGE, require('./large')],
    ];

    this._bags = new Map(sizes);
  }

  set colorized(value) {
    this._colorized = Boolean(value);
  }

  get colorized() {
    return this._colorized;
  }

  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  get currentBag() {
    if (this._bags.has(this.size)) {
      return this._bags.get(this.size);
    }

    return this._bags.get(SIZE.MEDIUM);
  }
};
