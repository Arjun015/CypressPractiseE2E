///<reference types ="cypress"/>

describe('verify the mouse hovor action in cypress', function () {

    it('Mouse hovor actions', function () {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')

        //Approch-1
        // cy.get('div[class="dropdown-content"]').first().trigger('mouseover')
        // cy.get('a[class="list-alert"]').first().should('be.visible')

        //Approch-2
        cy.get('div[class="dropdown-content"]').first().invoke('show')
        cy.get('[class="list-alert"]').first().should('be.visible')

        // handling simple alert
        cy.on('window:alert', function (msg) {
            expect(msg).to.eq('Well done you clicked on the link!')
            return true
        })
        cy.contains('Link 1').click({ force: true })
    })

})
