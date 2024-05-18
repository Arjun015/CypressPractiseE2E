///<reference types ="cypress"/>


describe('find case sensitive search on page',function(){

    it('verify the exact match case in cypress',function(){

        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.contains(' ADDONS',{matchCase:false}).click() // {matchCase:false} 
    })
})
