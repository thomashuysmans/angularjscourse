(function(){
    angular.module('datepicker.filters').filter('empty', function() {
	return function(input, emptyText) {
		if (input !== undefined && input !== null && 
		    input.length !== 0) {
			return input;
		}
 		if (emptyText !== undefined) {
			return emptyText;
		}
 		return '-';
	   };
    });    
})();
 
