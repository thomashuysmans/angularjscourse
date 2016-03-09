describe('Controller: MainController', function(){
   var $controller, controller, $httpBackend;
   var baseUrl = 'http://127.0.0.1:9688/contacts';
   
   beforeEach(function(){
      module('datepicker');
      inject(function(_$controller_, $rootScope, _$httpBackend_){
         $controller = _$controller_;
         $httpBackend = _$httpBackend_; 
      }); 
   });
   
   afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest(); 
   });
   
   it('should retrieve a list of contacts', function(){
      var response = [{}, {}, {}];
      
      $httpBackend.expectGET(baseUrl).respond(response);
      
      var controller = $controller('MainController');
      $httpBackend.flush();
      
      expect(controller.contacts.length).toEqual(response.length);
       
   });
   
   describe('after instantiation', function(){
      beforeEach(function(){
          $httpBackend.expectGET(baseUrl).respond([{}, {}, {}]);
          controller = $controller('MainController');
          $httpBackend.flush();
      });
      
      
      it('should add a contact', function(){
        controller.newContact = {};
        $httpBackend.expectPOST(baseUrl).respond(201, {});
        var countBefore = controller.contacts.length;
      
        controller.saveContact();
        $httpBackend.flush();
      
        expect(controller.contacts.length).toBe(countBefore + 1);    
      });
   });
    
});