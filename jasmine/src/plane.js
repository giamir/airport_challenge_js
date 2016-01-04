function Plane() {
  this.isFlying = false;
}

Plane.prototype.land = function() {
  if (this.isFlying === false) throw new TypeError('Unable to land cause is not flying');
  this.isFlying = false;
};

Plane.prototype.take_off = function() {
  if (this.isFlying) throw new TypeError('Unable to take off cause is already flying');
  this.isFlying = true;
};
