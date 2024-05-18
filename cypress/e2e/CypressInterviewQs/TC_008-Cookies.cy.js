///<reference types ="cypress"/>


describe('Cookies', function () {

    it('cy.getCookie() - get a browser cookie', function () {

        cy.visit('https://example.cypress.io/commands/cookies')
        // https://on.cypress.io/getcookie
        cy.get('#getCookie .set-a-cookie').click()

        // cy.getCookie() yields a cookie object
        cy.getCookie('token').should('have.a.property','value','123ABC')
        
        
        //.then(function(ss){
         
           
        //})           //.should('have.property', 'value', '123ABC')
    })
})