function ModuleShared(module1, module2) {
  console.log('ModuleShared constructor -- ' + module1.data + ' -- ' + module2.data);
  setTimeout(function(){ console.log(module2.data) }, 4000);
}

module.exports = ModuleShared;