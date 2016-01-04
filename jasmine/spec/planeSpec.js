describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('#land', function() {
    it('set flying status to false', function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
  });

  describe('#take_off', function() {
    it('set flying status to true', function() {
      plane.take_off();
      expect(plane.isFlying).toBe(true);
    });
  });
});
