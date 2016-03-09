(function(){
    angular.module('datepicker.filters').filter('contactName', function(){
        return function(input){
            return input.firstName + ' ' + input.surname;
        }; 
    });    
})();
