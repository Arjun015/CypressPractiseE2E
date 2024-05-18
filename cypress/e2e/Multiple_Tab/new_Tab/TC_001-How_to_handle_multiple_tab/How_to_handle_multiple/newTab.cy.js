///<reference types ="cypress"/>

/*
Qs:-> why cypress can't handle multiple tab/new tab?
Ans : we know , cypress run inside the browser that's whay
      it does not support for multiple browser tab.
      
      In that case we can manipulate our HTML ,so that 
      our link opens in same tab 

*/

describe('Opening the new tab in cypress',function(){
      beforeEach(function(){
            cy.visit('https://selectorshub.com/xpath-practice-page/')
      })

       // Approch-1 : removing the target attr
      it('TC_001-Approch_1 : Open new tab in cypress removing target attribute',function(){
            //cy.visit('https://selectorshub.com/xpath-practice-page/')

            //uncaught:exception error
            Cypress.on('uncaught:exception', (err, runnable) => {
                  // returning false here prevents Cypress from
                  // failing the test
                  return false
              })
            cy.contains('User Role').invoke('removeAttr','target').click()


      })
         
        // Approch-2: updating the value of target attr
      it('TC_002-Approch_2 : Open new tab in cypress update the value of target attribute',function(){
            Cypress.on('uncaught:exception', (err, runnable) => {
                  // returning false here prevents Cypress from
                  // failing the test
                  return false
              })
            cy.contains('Course Link').invoke('attr','target','_self').click()    

            

      })

      // Approch-3 : Absense of target attr
      it('TC_003-Approch_3:Opens link in new tab when target attribute is absent', function(){

            // Find the link and retrieve its href attribute
            cy.contains('Click here to open link').invoke('removeAttr', 'target').then($link => {
                const url = $link.prop('href');

                // Visit the URL with target="_blank"
                cy.visit(url, { // Opens the URL in a new tab
                    log: false, // Prevents the URL from being logged to the Cypress command log
                    onBeforeLoad: (contentWindow) => {
                        // Use window.open to open the link in a new tab
                        contentWindow.open(url, '_blank');
                    }
                });

                // Assertion or further actions in the new tab
                cy.contains('New Page Title').should('be.visible');
            });
        })



        it('TC_001-Approch_4 : Open link in new tab by simulating Ctrl+Click',function(){
            //cy.visit('https://selectorshub.com/xpath-practice-page/')
            Cypress.on('uncaught:exception', (err, runnable) => {
                  // returning false here prevents Cypress from
                  // failing the test
                  return false
              })
            
            cy.contains('User Role').type('{ctrl}', { release: false })
            cy.contains('User Role').click()


      })
})