///<reference types ="cypress"/>

describe('verify the login testCase',function(){

    it('verify the login testCase with valid credentials',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.get('img[alt="client brand banner"]')
        .should('be.visible')
        .log('User login successfully')
    })
})