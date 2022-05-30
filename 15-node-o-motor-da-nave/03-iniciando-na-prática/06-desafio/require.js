let getFlagValue = require('./getflag');

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('greeting')}.`)