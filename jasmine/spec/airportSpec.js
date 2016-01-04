describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
    airport.weather = { isStormy: function() {} };
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
    });
    it('instructs the plane to take off', function() {
      airport.take_off(plane);
      expect(plane.take_off).toHaveBeenCalled();
    });
    it('has the plane after it has landed', function() {
      airport.take_off(plane);
      expect(airport.planes).not.toContain(plane);
    });
    it('does not allow the plane to take off when weather is stormy', function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      var msg = 'Unable to take off due to stormy weather';
      expect( function(){ airport.take_off(plane); } ).toThrowError(msg);
    });
  });
});
