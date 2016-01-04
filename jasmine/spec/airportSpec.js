describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
    airport.weather = { isStormy: function() {} };
  });

  describe('#initialize', function() {
    it('creates an airport with default capacity if not specified', function() {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });
    it('creates an airport with a specified capacity', function() {
      var airport2 = new Airport(50);
      expect(airport2.capacity).toEqual(50);
    });
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
    it('does not allow the plane to land when weather is stormy', function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      var msg = 'Unable to take off due to stormy weather';
      expect( function(){ airport.land(plane); } ).toThrowError(msg);
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
