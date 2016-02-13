var ModuleShared = function(module1, module2) {
  console.log('ModuleShared constructor -- ' + module1.data + ' -- ' + module2.data);
  setTimeout(function(){ console.log(module2.data) }, 4000);
}

ModuleShared.prototype.sharedFunction = function() {
	console.log('someone called the shared function');
}

module.exports = ModuleShared;