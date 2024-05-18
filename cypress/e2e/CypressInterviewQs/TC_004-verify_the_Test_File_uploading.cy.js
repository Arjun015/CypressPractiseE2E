///<reference types ="cypress"/>


describe('verify the functionality of file uploading',function(){

    it('verify to Test file uploading',function(){

        cy.visit('https://tus.io/demo') // navigate the url
        
        // forward '/' using for path
       cy.get('input[id="P0-0"]').selectFile("C:/Users/hp/Downloads/Leonardo_Diffusion_XL_I_want_create_oldest_man_with_Sadhu_dres_0.jpg")
       //cy.get('#P0-0').invoke('removeAttr', 'target').should('be.selected')
       cy.get('input[id="P0-0"]').invoke('removeAttr', 'target').should('have.value',"C:/Users/hp/Downloads/Leonardo_Diffusion_XL_I_want_create_oldest_man_with_Sadhu_dres_0.jpg")
    })
})