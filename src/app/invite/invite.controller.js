(function() {
  'use strict';

  angular
    .module('datepicker')
    .controller('InviteController', InviteController);

  /** @ngInject */
  function InviteController($resource, $timeout, $log) {
    var vm = this;
    vm.$log = $log;
    
    vm.contactResource = $resource('http://127.0.0.1:9688/contacts/:contactId',
        { contactId: '@contactId' },
        { update: { method: 'PUT'} });
    
    vm.contacts = vm.contactResource.query(function(){}, function(error){
       handleError(); 
    });
        
    vm.errorHappened = false;
    
    function handleErrror(){
        vm.errorHappened = true;
        $timeout(function(){
           vm.errorHappened = false; 
        }, 3000);
    }
    
    vm.sendInvitations = function(){
        vm.$log.log('These contacts were invited for "' + vm.event.title  + '":');
        for (var i = 0; i < vm.contacts.length; i++){
            var contact = vm.contacts[i];
            if(contact.invited === true){
                vm.$log.log('- ' + contact.firstName + ' ' + contact.surname);
            }
        }
    }
  }
})();