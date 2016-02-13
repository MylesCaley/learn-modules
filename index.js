var Module1 = require('./Module1.js')
var Module2 = require('./Module2.js')
var ModuleShared = require('./ModuleShared.js')



var module1 = new Module1();
var module2 = new Module2();
var moduleshared = new ModuleShared(module1,module2);

moduleshared.sharedFunction();