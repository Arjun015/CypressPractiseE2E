///<reference types ="cypress"/>


describe('verify the Pyload data pass from exelFile', function () {

    it('TC_001-verify the reading data from exel in fixture', function () {

        cy.parseXlsx('/Users/hp/OneDrive/Desktop/CypressPractise/cypress/fixtures/Book1.xlsx').then(function (jsonData) {
            cy.log(jsonData[0].data[1])
            // cy.log(jsonData[1])

            for (let i = 1; i < jsonData[0].data.length; i++) {


                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                cy.get('[name="first_name"]').type(jsonData[0].data[i][0])
                cy.get('[name="last_name"]').type(jsonData[0].data[i][1])
                cy.get('[name="email"]').type(jsonData[0].data[i][2])
                cy.get('[name="message"]').type(jsonData[0].data[i][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', "Thank You for your Message!")

            }



        })

    })

    it.only('TC_002-verify the reading data from exel in fixture', function () {

        cy.parseXlsx('/Users/hp/OneDrive/Desktop/CypressPractise/cypress/fixtures/Book1.xlsx').then(function (jsonData) {
            cy.log(jsonData[1].data[1])
            // cy.log(jsonData[1])

            for (let j = 1; j < jsonData[1].data.length; j++) {


                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                cy.get('[name="first_name"]').type(jsonData[1].data[j][0])
                cy.get('[name="last_name"]').type(jsonData[1].data[j][1])
                cy.get('[name="email"]').type(jsonData[1].data[j][2])
                cy.get('[name="message"]').type(jsonData[1].data[j][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', "Thank You for your Message!")

            }



        })

    })



})