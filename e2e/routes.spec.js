describe('E2E: Routes', function(){
   var baseUrl = 'http://localhost:9000/';
   beforeEach(function(){
      browser.get(baseUrl); 
   }); 
   
   it('should have a working /invite route', function(){
      var url = baseUrl + '#/invite';
      browser.get(url);
      expect(browser.getCurrentUrl()).toBe(url); 
   });
   
});
