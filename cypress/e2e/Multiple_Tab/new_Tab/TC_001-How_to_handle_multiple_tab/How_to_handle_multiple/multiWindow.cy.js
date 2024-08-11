///<reference types ="cypress"/>

describe('verify the handling of the multiWindow in cypress',function(){

    it('Multi-Window handling',function(){

        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then(function(win){
            cy.stub(win,'open').callsFake(function(url){
                win.location.href = url
                console.log(url)
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain',"https://www.letskodeit.com/courses")
    })

    it.only('verify multi window -rahulshetty',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then((win)=>{
            cy.stub(win, 'open').callsFake((url)=>{
                win.location.href = url
            })
        })

        cy.get('#openwindow').click()
        cy.wait(10000)
        cy.url().should('contain','qaclickacademy')
    })
})