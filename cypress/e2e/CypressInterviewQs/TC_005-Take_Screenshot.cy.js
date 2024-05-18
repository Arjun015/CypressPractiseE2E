///<reference types ="cypress"/>


describe('Verify user login with the Invalid credential',function(){

    it('User login with invalid credentials',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()
        cy.screenshot()
    })
})