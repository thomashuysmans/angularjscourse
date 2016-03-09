(function() {
  'use strict';

  angular
    .module('datepicker')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($resource) {
    var vm = this;
    vm.name = 'world';
    
    vm.contactResource = $resource('http://127.0.0.1:9688/contacts/:contactId',
        { contactId: '@contactId' },
        { update: { method: 'PUT'} });
        
    vm.contacts = vm.contactResource.query(function(data){
        vm.contact = data;
    }, function(error){
        handleError(error);
    });
    
    
    vm.newContact = {};
    
    vm.saveContact = function(){
            vm.contactResource.save(vm.newContact, function(data){
                vm.contacts.push(data); 
            }, function(error){
              handleError(error);  
            });            
            vm.newContact = {}    
    };
    
    vm.updateContact = function(contact) {
		contact.inEditMode = false;
		vm.contactResource.update({ contactId: contact.id }, contact, function() {}, function() {
			handleError();
		});
	};

	vm.deleteContact = function(contact) {
		vm.contactResource.delete({ contactId: contact.id }, function() {
			for(var i = 0; i < vm.contacts.length; i++) {
				if(vm.contacts[i].id === contact.id) {
					vm.contacts.splice(i, 1);
					break;
				}
			}
		}, function() {
			handleError();
		});
	};
    
    
    function handleError(data){
        console.log("Exception handled. Details: " + data);
    }
  }
})();
