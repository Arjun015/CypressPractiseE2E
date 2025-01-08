///<reference types = "cypress"/>

describe('Verify the functionality of g-Seva registrtion form',function(){

    it('verify the entering the required details for all field',function(){
        cy.visit('https://g-seva.com/post-applicants/post-applicants-registration-form')
        // pad
        cy.get('div[class="input-field"]').select('सरपंच') // pad
        cy.get('#dp1729095813740').type('16/10/2024') // from
        cy.get('#dp1729095813741').type('16/11/2024') //To
         
        // name
        cy.get('input[placeholder="Enter your name"]').type('Arjun Jadhav')
        cy.get('input[type="tel"]').type(8397383332)
        cy.get('input[type="email"]').type('admin123@gmail.com')

        //aadhr

        cy.get('input[name="aadhar"]').type(233401266577)
        cy.get('input[name="grampanchayat"]').type('Deothan Grampanchayat')
        cy.get('input[name="panchayat_samiti"]').type("Yeola PanchayatSamiti")

        // Dist
        cy.get('input[name="district"]').type('Nashik')
        cy.get('input[placeholder="Enter your address"]').type('Deothan , Yeola, Nashik')
        cy.get('select[name="gender"]').select('Male')

        // photo
        cy.get('.file-input-div').select('C:\Users\hp\Pictures\Screenshots')

        // click on the button 
        cy.get('##submit-post-applicant-form-btn').click()



    })
})