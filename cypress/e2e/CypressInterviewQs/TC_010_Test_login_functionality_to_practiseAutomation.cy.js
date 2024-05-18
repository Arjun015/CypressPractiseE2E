///<reference types ="cypress"/>

describe('verify the login functionality of PractiseTestAutomation ',function(){

    it('TC_001-verify login functionality to PractiseTestAutomation with valid credentials ',function(){

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get("#username").first().type('student')
        cy.get('#password').first().type('Password123')
        cy.get('#submit').first().click()

        // url validation
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/')
        //Text validation
        cy.get('.post-title').should('have.text','Logged In Successfully')
        // Text Validation
        cy.get("p[class='has-text-align-center'] strong").should('have.text',"Congratulations student. You successfully logged in!")
        
    })

    it('TC_002- verify the login functionality of practiseAutomation with Invalid userName',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get("#username").first().type('stud')
        cy.get('#password').first().type('Password123')
        cy.get('#submit').first().click()
        cy.get('#error').first().should('have.text',"Your username is invalid!")

    })

    it('TC_003- verify the login functionality of practiseAutomation with Invalid passWord',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get("#username").first().type('student')
        cy.get('#password').first().type('jfbfbr')
        cy.get('#submit').first().click()
        cy.get('#error').first().should('have.text',"Your password is invalid!")

    })

    it("TC_004-verify the loggOut testCase for practiseAutomation",function(){

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get("#username").first().type('student')
        cy.get('#password').first().type('Password123')
        cy.get('#submit').first().click()

        // url validation
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/')
        //Text validation
        cy.get('.post-title').should('have.text','Logged In Successfully')

        // logOut functionality
        cy.contains('Log out').click().should("have.class",'wp-block-button__link has-text-color has-background has-very-dark-gray-background-color')
        cy.url().should('eq',"https://practicetestautomation.com/practice-test-login/")

    })
})