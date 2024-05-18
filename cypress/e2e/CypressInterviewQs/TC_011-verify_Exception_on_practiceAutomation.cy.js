///<reference types ="cypress"/>

describe('verify the Exception on PractiseAutomation', function () {

    beforeEach(function () {
        cy.visit("https://practicetestautomation.com/practice-test-exceptions/")
    })


    it('TC_001: verify the "No such element exception"', function () {

        // click Add button
        cy.contains('Add').click({force:true})

        cy.get("div[id='row2'] input[type='text']").should("exist")

        // Verify Row 2 input field is displayed
        
        cy.get("div[id='row2'] input[type='text']",{timeout:10000}).should('be.visible')


    })
})