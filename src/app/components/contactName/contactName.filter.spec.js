describe('Filter: contactName', function(){
   var contactNameFilter;
   
   beforeEach(function(){
       module('datepicker.filters');
       inject(function($filter){
           contactNameFilter = $filter('contactName');
       });
   });
   
   it('should format the name properly', function(){
       var contact = { firstName: 'Frank', surname: 'de Boer' };
       expect(contactNameFilter(contact)).toBe('Frank de Boer');
   })
    
});