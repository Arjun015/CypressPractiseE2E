///<reference types = "cypress"/>

describe('Verify the title of page',function(){

    it('Title of page',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq',"OrangeHRM")
    })
})