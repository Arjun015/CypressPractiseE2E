///<reference types ="cypress"/>

describe('verify the scroll into view action in cypress',function(){

    it('scroll action in cypress',function(){

        cy.visit('https://www.webdriveruniversity.com/')
        cy.contains('PAGE OBJECT MODEL').scrollIntoView()
        //cy.contains('PAGE OBJECT MODEL').focus()   // highlighting the elements
        cy.contains('PAGE OBJECT MODEL').should('be.visible')
        cy.contains('PAGE OBJECT MODEL').scrollTo('bottom',{ensureScrollable: false}).should('be.visible')

    })
    
})