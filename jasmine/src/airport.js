var DEFAULT_CAPACITY = 10;

function Airport(capacity) {
  this.planes = [];
  this.weather = new Weather();
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
}

Airport.prototype.land = function(plane) {
  var msg = 'Unable to take off due to stormy weather';
  if(this.weather.isStormy()) throw new TypeError(msg);
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
