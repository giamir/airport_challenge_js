function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane) {
  plane.take_off();
  var i = this.planes.indexOf(plane);
  if(i != -1) {
  	this.planes.splice(i, 1);
  }
};
