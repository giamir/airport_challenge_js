describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('#land', function() {
    it('set flying status to false', function() {
      plane.take_off();
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
    it('can not land when is not flying', function() {
      var msg = 'Unable to land cause is not flying';
      expect( function(){ plane.land(); } ).toThrowError(msg);
    });
  });

  describe('#take_off', function() {
    it('set flying status to true', function() {
      plane.take_off();
      expect(plane.isFlying).toBe(true);
    });
    it('can not take off when is already flying', function() {
      plane.take_off();
      var msg = 'Unable to take off cause is already flying';
      expect( function(){ plane.take_off(); } ).toThrowError(msg);
    });
  });
});
