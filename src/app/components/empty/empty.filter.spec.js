describe('Filter: Empty', function () {
	var emptyFilter;
	beforeEach(function () {
		module('datepicker.filters');
		inject(function ($filter) {
			emptyFilter = $filter('empty');
		});
	});

 	it('should make empty values noticeable', function () {
		expect(emptyFilter('')).toBe('-');
	});

 	it('should leave non-empty values alone', function () {
		expect(emptyFilter('input')).toBe('input');
	});
    
    // it('should return empty', function() {
    //    expect(emptyFilter('', 'empty')).toBe('empty'); 
    // });
    
}); 
