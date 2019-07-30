const Bag = require('./bag')

module.exports = class MediumBag extends Bag {
  /**
  * @param {object} options
  * @param {boolean=true} options.colorized
  */
  constructor({ colorized = true }) {
    super({ colorized })
  }

  /**
  * Draw the package in console
  */
  draw() {
    const { bgWhite, tRed, tGreen, bgGreen } = this.colors;

    console.log(`
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('          ')}               ${bgWhite('          ')}
${bgWhite('                                   ')}
${bgWhite('                             ' + tGreen('▥▥▥') + '   ')}
${bgWhite('                                   ')}
${bgWhite('                                   ')}
${bgWhite('           ' + tGreen('зелений пакет') + '           ')}
${bgWhite('                                   ')}
${bgWhite('                                   ')}
${bgWhite('                                   ')}
${bgWhite('                ' + tRed('АТБ') + '                ')}
${bgWhite('                                   ')}
${bgWhite(' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ')}
${bgGreen('                                   ')}
${bgGreen('                                   ')}
${bgGreen('                                   ')}
${bgGreen('                                   ')}
`);

    return this;
  }

  caption() {
    console.log('Even an ATB market plastic bag (L size) was there... What about you?!')

    return this;
  }
};
