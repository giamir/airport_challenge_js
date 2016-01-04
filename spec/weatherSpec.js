describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('#isStormy', function() {
    it('can be non-stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(weather.isStormy()).toBe(false);
    });
    it('can be stormy', function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(weather.isStormy()).toBe(true);
    });
  });
});
