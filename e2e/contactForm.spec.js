describe('E2E: Contact form', function() { // Tests here

    beforeEach(function() {
        browser.get('/index.html');
    });

    it('browser', function(){
        var addButton = element(by.css('button'));
        browser.debugger();
        expect(addButton.isEnabled()).toBe(false);
    });

});