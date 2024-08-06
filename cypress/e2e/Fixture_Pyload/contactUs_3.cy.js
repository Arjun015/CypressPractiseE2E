///<reference types ="cypress"/>

import user from "../../fixtures/contact3.json"

describe('verify the contactUs functionlity', function () {

    it('TC_001 :contactUs functionality', function () {
        for (let keys in user) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('input[name="first_name"]').type(user[keys].firstName)
            cy.get('input[name="last_name"]').type(user[keys].lastName)
            cy.get('input[name="email"]').type(user[keys].email)
            cy.get('textarea[name="message"]').type(user[keys].message)
            cy.get('input[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')

        }


    })



    it('TC_002 :contactUs functionality', function () {
        user.forEach(el => {


            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')



        })
    })

    user.forEach(function(el,index) {
    it(`verify the contactUs functionality ${index+1}`, function () {
       


            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()

            cy.get('h1').should('have.text', 'Thank You for your Message!')



        })
    })
})



