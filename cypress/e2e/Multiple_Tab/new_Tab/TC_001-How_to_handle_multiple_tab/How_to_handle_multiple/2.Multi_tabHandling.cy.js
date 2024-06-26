///<reference types ="cypress"/>
// Scenario 
//    1.open the "https://www.kesari.in/"
//    2.click on the "eBroucher2024"
//    3. validtion of text 

describe('verify the Multiple Tab handling',function(){

    it('Multiple tab handling',function(){

        cy.visit('https://www.kesari.in/')
        cy.get('.blink-text.ng-tns-c36-0').should('have.attr','href').and('include','summerhd24')
    })

    it('TC_001-verify the multiple tab handling using invoke method with Target attribute',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('.blink-text.ng-tns-c36-0').invoke('removeAttr','target').click()
        cy.url().should('contain','summerhd24')

    })

    it.only('TC_002-verify the multiple tab handling using invoke method Absence Target attribute',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('.blink-text.ng-tns-c36-0').then(function(newTab){
           let url =  newTab.prop('href')
           cy.visit(url)
           cy.url().should('contain','summerhd24')
        })
        cy.go('back')
        cy.go('forward')

    })
})
