describe("my_awesome_page", function() {

  beforeEach(function() {
    loadFixtures("awesome.html");
  });

  describe("#change_status(status)", function() {
    it("should change the status message", function() {
      expect($('div#awesome').text()).toNotEqual("Awesome!");
      change_status('Awesome!');
      expect($('div#awesome').text()).toEqual("Awesome!");
    });
  });
});