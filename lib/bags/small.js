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
    const { bgWhite, bgBlue, tWhite, tBlue, tRed } = this.colors;

    console.log(`
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('     ')}         ${bgWhite('     ')}
${bgWhite('                ' + tBlue('▥') + '  ')}
${bgWhite('                   ')}
${bgWhite('  ')}${bgBlue('               ')}${bgWhite('  ')}
${bgWhite('  ')}${bgBlue('       ' + tWhite('᛫¯¯᨞') + '    ')}${bgWhite('  ')}
${bgWhite('  ')}${bgBlue('    ' + tWhite('⁄ ') + tRed('АТБ') + tWhite(' ⁄') + '    ')}${bgWhite('  ')}
${bgWhite('  ')}${bgBlue('    ' + tWhite('᨞__᛫') + '       ')}${bgWhite('  ')}
${bgWhite('  ')}${bgBlue('               ')}${bgWhite('  ')}
${bgWhite('                   ')}
`);

    return this;
  }

  caption() {
    console.log('Even an ATB market plastic bag (S size) was there... What about you?!');

    return this;
  }
};
