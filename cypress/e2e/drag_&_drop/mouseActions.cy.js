///<reference types = "cypress"/>

describe('verify the drag and drop functionality',function(){

    it('Drag and drop functinality using {which:1}',function(){

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        //drag
        cy.get('#draggable').first().trigger('mousedown',{which:1})
        // drop
        cy.get('#droppable').first().trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p >b').should('have.text','Dropped!') // assertion
    })

    it('Drag and drop functinality using {button:1}',function(){

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        //drag
        cy.get('#draggable').first().trigger('mousedown',{button:1})
        // drop
        cy.get('#droppable').first().trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p >b').should('have.text','Dropped!') // assertion
    })
})