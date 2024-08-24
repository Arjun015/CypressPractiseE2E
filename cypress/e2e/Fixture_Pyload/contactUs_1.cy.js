///<reference types = "cypress"/>

describe('verify the fixtunality to passing fixture',function(){

    let info = {

        firstName : "Arjun",
        lastName : "Jadhav",
        email : "admin123@gmail.com",
        message : "I am the Perfect"
    }

    it('verify the accessing above obj Pyload ',function(){
       // Arrangement
       cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
       //Action
       cy.get('input[name="first_name"]').type(info.firstName)
       cy.get('input[name="last_name"]').type(info.lastName)
       cy.get('input[name="email"]').type(info.email)
       cy.get('textarea[name="message"]').type(info.message)
       cy.get('input[type="submit"]').click()
       //Asserssion
       cy.get('h1').should('have.text','Thank You for your Message!')


    })
})