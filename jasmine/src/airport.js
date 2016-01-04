function Airport() {
  this.planes = [];
  this.weather = new Weather();
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane) {
  var msg = 'Unable to take off due to stormy weather';
  if(this.weather.isStormy()) throw new TypeError(msg);
  plane.take_off();
  var i = this.planes.indexOf(plane);
  if(i != -1) {
  	this.planes.splice(i, 1);
  }
};
