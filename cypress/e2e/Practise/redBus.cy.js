///<reference types ="cypress"/>

describe('verify counting of the travelling buses',function(){

    it('redBus travelling',function(){
        cy.visit('https://www.redbus.in')
        cy.get('input[id="src"]').type('chennai')
        cy.get('li[class="sc-iwsKbI jTMXri"] >div >text[0]').then(function(data){
            cy.log(data.text())
        })
    })
})