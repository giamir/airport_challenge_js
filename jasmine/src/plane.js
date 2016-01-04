function Plane() {
  this.isFlying = false;
}

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.take_off = function() {
  this.isFlying = true;
};
