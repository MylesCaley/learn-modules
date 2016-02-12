function Module2() {
	self = this;
	this.data = "module 2 data";
	console.log('Module2 constructor');
	setTimeout(function(){ self.data = "module 2 ***MODIFIED*** data" }, 2000);
}

module.exports = Module2;