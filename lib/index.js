'use strict';

const chalk = require('chalk');

let init = function (size) {
    switch (size) {
        case  'little':
            littleSize();
            break;
        case 'big':
            bigSize();
            break;
        default:
            middleSize();
            break;
    }
};

function littleSize() {
    console.info(`
${chalk.bgWhite('   ')}     ${chalk.bgWhite('   ')}
${chalk.bgWhite('   ')}     ${chalk.bgWhite(' ' + chalk.black('▥') + ' ')}
${chalk.bgWhite('     ' + chalk.blue('-') + '     ')}
${chalk.bgWhite('   ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '   ')}
${chalk.bgWhite('     ' + chalk.blue('-') + '     ')}
${chalk.bgWhite('           ')}
${chalk.blue('Even an ATB market plastic bag (L) was there... What about you?!')}
    `);
}

function middleSize() {
    console.info(`
${chalk.bgWhite('    ')}       ${chalk.bgWhite('    ')}
${chalk.bgWhite('    ')}       ${chalk.bgWhite('    ')}
${chalk.bgWhite('    ')}       ${chalk.bgWhite(' ' + chalk.black('▥▥') + ' ')}
${chalk.bgWhite('       ' + chalk.blue('-') + '       ')}
${chalk.bgWhite('     ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '     ')}
${chalk.bgWhite('       ' + chalk.blue('-') + '       ')}
${chalk.bgWhite('               ')}
${chalk.blue('Even an ATB market plastic bag (M) was there... What about you?! ')}
    `);
}

function bigSize() {
    console.info(`
${chalk.bgWhite('     ')}       ${chalk.bgWhite('     ')}
${chalk.bgWhite('     ')}       ${chalk.bgWhite('     ')}
${chalk.bgWhite('     ')}       ${chalk.bgWhite(' ' + chalk.black('▥▥▥') + ' ')}
${chalk.bgWhite('                 ')}
${chalk.bgWhite('        ' + chalk.blue('-') + '        ')}
${chalk.bgWhite('      ' + chalk.blue('(') + chalk.red('ATB') + chalk.blue(')') + '      ')}
${chalk.bgWhite('        ' + chalk.blue('-') + '        ')}
${chalk.bgWhite('                 ')}
${chalk.blue('Even an ATB market plastic bag (XL) was there... What about you?!')}
 `);
}

module.exports = init;
