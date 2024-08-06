///<reference types = "cypress"/>

describe('verify the functionality of contactUs form',function(){

   
        it('verify the accessing above obj Pyload ',function(){
            cy.fixture('contactUS_1.json').then(function(data){
            // Arrangement
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            //Action
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[type="submit"]').click()
            //Asserssion
            cy.get('h1').should('have.text','Thank You for your Message!')
     
     
         })
 
    })
})