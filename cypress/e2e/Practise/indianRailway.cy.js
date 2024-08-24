///<reference types ="cypress"/>

describe('verify counting of the travelling Railways',function(){

    it('railway travelling',function(){
        cy.visit('https://www.railyatri.in/train-ticket?utm_source=search_camp_Compt_dweb&pt_source=googleads&pt_medium=cpc&pt_campaign=&gad_source=1&gclid=CjwKCAjw_Na1BhAlEiwAM-dm7O89bY_2Lcs6KHY-U4tGO5uVKf7-GSFsi58KWVUk4RP2otjBKDdoMhoCSOoQAvD_BwE')
        cy.get('#fromstation').type('chennai')
        
    })
})