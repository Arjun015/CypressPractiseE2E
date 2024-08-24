///<reference types = "cypress"/>

describe('verify the login with session',function(){
       
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.HrmSessionlogin('Admin','admin123')
    })
     // simple login
    // it('verify hrm login with session',function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get('[name="username"]').type('admin')
    //     cy.get('[name="password"]').type('admin123')
    //     cy.get('button[type="submit"]').click()
    //     cy.get('.oxd-topbar-header-breadcrumb > h6').should('have.text','Dashboard')

    // })

    it('login with session',function(){
        cy.wait(10000)
        cy.get('.oxd-topbar-header-breadcrumb > h6').should('have.text','Dashboard')
    })

    it('login with session',function(){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
        cy.get('ul[class="oxd-main-menu"] >li').eq(1).click()
    })
})