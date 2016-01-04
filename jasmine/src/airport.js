var DEFAULT_CAPACITY = 10;

function Airport(capacity) {
  this.planes = [];
  this.weather = new Weather();
  this.capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
}

Airport.prototype.land = function(plane) {
  if(this.weather.isStormy()) throw new TypeError('Unable to take off due to stormy weather');
  if(this._isFull()) throw new TypeError('Unable to land cause airport is full');
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.take_off = function(plane) {
  if(this.weather.isStormy()) throw new TypeError('Unable to take off due to stormy weather');
  plane.take_off();
  var i = this.planes.indexOf(plane);
  if(i != -1) {
  	this.planes.splice(i, 1);
  }
};

Airport.prototype._isFull = function() {
  return this.planes.length >= this.capacity;
};
