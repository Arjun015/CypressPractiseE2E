///<reference types = "cypress"/>

describe('verify the shodow dom element in cypress',function(){

    it('Approch-1',function(){

        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('shadow-signup-form').shadow().find('input[name="username"]').type('anjana')
        cy.get('shadow-signup-form').shadow().find('input[name="email"]').type('anjana123@gmail.com')
        cy.get('shadow-signup-form').shadow().find('input[name="password"]').type('anjana@123')
        cy.get('shadow-signup-form').shadow().find('input[name="confirm_password"]').type('anjana@123')
        cy.get('shadow-signup-form').shadow().find(' button[type="button"]').click()
    })

    it('Approch-2',function(){

        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('input[name="username"]',{includeShadowDom:true}).type('anjana')
        cy.get('input[name="email"]',{includeShadowDom:true}).first().type('anjana123@gmail.com')
        cy.get('input[name="password"]',{includeShadowDom:true}).type('anjana@123')
        cy.get('input[name="confirm_password"]',{includeShadowDom:true}).type('anjana@123')
        cy.get(' button[type="button"]',{includeShadowDom:true}).click()
    })

    //Approch-3 
    //'includeShadowDom:true' in cypress.config.js file inside e2e.

})