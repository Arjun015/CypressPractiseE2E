///<reference types ="cypress"/>

describe('Double click action',function(){
    
    it('double click',function(){

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('div[id="double-click"]').first().should('not.have.class','div-double-click double')
        cy.get('div[id="double-click"]').first().dblclick().should('have.class','div-double-click double')
    })
})