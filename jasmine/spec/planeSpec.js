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
});
