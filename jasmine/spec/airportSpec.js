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
});
