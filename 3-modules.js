// Modules

const names = require('./4-names')
const sayHi = require('./5-utils')
const obj = require('./6-alternative-flavours')

require('./7-mind-grenade')

console.log(obj.singlePerson.name);

sayHi('susan')
sayHi(names.name1)
sayHi(names.name2)