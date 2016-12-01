'use strict';

const chalk = require('chalk');

let init = function (options) {
  options = options || {};
  switch (options.size) {
    case 'middle':
      console.info(`
 ${chalk.bgWhite('    ')}       ${chalk.bgWhite('    ')}
 ${chalk.bgWhite('    ')}       ${chalk.bgWhite('    ')}
 ${chalk.bgWhite('    ')}       ${chalk.bgWhite(' ' + chalk.black('▥▥') + ' ')}
 ${chalk.bgWhite('       ' + chalk.blue('-') + '       ')}
 ${chalk.bgWhite('     ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '     ')}
 ${chalk.bgWhite('       ' + chalk.blue('-') + '       ')}
 ${chalk.bgWhite('               ')}
 ${chalk.blue(' Even an ATB market plastic bag was there... What about you?!')}
 `);
      break;
    case 'big':
      console.info(`
 ${chalk.bgWhite('     ')}       ${chalk.bgWhite('     ')}
 ${chalk.bgWhite('     ')}       ${chalk.bgWhite('     ')}
 ${chalk.bgWhite('     ')}       ${chalk.bgWhite(' ' + chalk.black('▥▥▥') + ' ')}
 ${chalk.bgWhite('                 ')}
 ${chalk.bgWhite('        ' + chalk.blue('-') + '        ')}
 ${chalk.bgWhite('      ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '      ')}
 ${chalk.bgWhite('        ' + chalk.blue('-') + '        ')}
 ${chalk.bgWhite('                 ')}
 ${chalk.blue(' Even an ATB market plastic bag was there... What about you?!')}
 `);
      break;
    default:
      console.info(`
 ${chalk.bgWhite('   ')}     ${chalk.bgWhite('   ')}
 ${chalk.bgWhite('   ')}     ${chalk.bgWhite(' ' + chalk.black('▥') + ' ')}
 ${chalk.bgWhite('     ' + chalk.blue('-') + '     ')}
 ${chalk.bgWhite('   ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '   ')}
 ${chalk.bgWhite('     ' + chalk.blue('-') + '     ')}
 ${chalk.bgWhite('           ')}

${chalk.blue(' Even an ATB market plastic bag was there... What about you?!')}
  `);
  }
};

module.exports = init;
