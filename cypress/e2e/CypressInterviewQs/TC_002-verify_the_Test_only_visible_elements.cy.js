///<reference types ="cypress"/>


describe('Visible elements',function(){

    it('verify to test only visible elements in cypress',function(){

        cy.visit('https://www.amazon.in/')

        // All the visible and invisible elements are visible
        cy.get('#nav-xshop a').should('have.length',32)

        // only visible elements

        cy.get('#nav-xshop a:visible').should('have.length',6)


    })

})
