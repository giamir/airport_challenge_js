describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
  });

  describe('#land', function() {
    it('instructs the plane to land', function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    it('has the plane after it has landed', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe('#take_off', function() {
    beforeEach(function() {
      airport.land(plane);
      airport.take_off(plane);
    });
    it('instructs the plane to take off', function() {
      expect(plane.take_off).toHaveBeenCalled();
    });
    it('has the plane after it has landed', function() {
      expect(airport.planes).not.toContain(plane);
    });
  });
});
