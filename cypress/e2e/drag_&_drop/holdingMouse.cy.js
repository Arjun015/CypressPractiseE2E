///<reference types ="cypress"/>

describe('verify the click and hold action in Mouse',function(){

    it('click and hold action ',function(){

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('div[id="click-box"]').trigger('mousedown',{button:1})
        //cy.wait(5000)
        cy.get('div[id="click-box"]').should('have.text','Well done! keep holding that click now.....')
        cy.get('div[id="click-box"]').trigger('mouseup',{button:1})
        cy.get('div[id="click-box"]').should('have.text','Dont release me!!!')
        
    })
})