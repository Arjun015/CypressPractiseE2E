
export class ContactUs {
    weblocators = {

        firstName : 'input[name="first_name"]',
        lastName :'input[name="last_name"]',
        email : 'input[name="email"]',
        comment : 'input[name="message"]',
        submit : 'input[type="submit"]' ,
        reset :'input[type="reset"]'
    }


    Contactus_form(fn,ln,email,mesg){
        cy.get(this.weblocators.firstName).type(fn)
        cy.get(this.weblocators.lastName).type(ln)
        cy.get(this.weblocators.email).type(email)
        cy.get(this.weblocators.comment).type(mesg)
    }
    
    submit() { 
        cy.get(this.weblocators.submit).click()
    }
    
    reset (){
        cy.get(this.weblocators).click()
    }
}

