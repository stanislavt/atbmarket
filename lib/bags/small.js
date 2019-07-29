const Bag = require('./bag')

module.exports = class SmallBag extends Bag {
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
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('                ' + tGreen('▥') + '  ')}
${bgWhite('                   ')}
${bgWhite('   ' + tGreen('зелений пакет') + '   ')}
${bgWhite('                   ')}
${bgWhite('        ' + tRed('АТБ') + '        ')}
${bgWhite(' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ' + tGreen('ˌ') + ' ')}
${bgGreen('                   ')}
${bgGreen('                   ')}
`);

    return this;
  }

  caption() {
    console.log('Even an ATB market plastic bag (S size) was there... What about you?!');

    return this;
  }
};
