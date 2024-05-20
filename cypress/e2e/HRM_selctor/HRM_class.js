import { login,homepageHrm } from "./selectors";

export class OrangeHrm {
    
    //login
    visitURL(url){
        cy.visit(Cypress.env('url'))
    }

    VerifyLogo(){
        cy.get(login.logo).eq(1).should('be.visible')
    }

    enterUserName(uName){
        cy.get(login.userName).type(uName)
    }

    enterPassword(pass){
        cy.get(login.passWord).type(pass,{force:true})
    }

    LoginBtn(){
        cy.get(login.loginBtn).click()
        
        return cy.get(homepageHrm.DashBoardVisible)
    }
    //homepage

    click_PIM(){
        cy.get(homepageHrm.PIM_element).eq(1).click({force:true})
    }

    addEmployee(){
        cy.get(homepageHrm.Add_employee,{timeout:10000}).click({force:true})
        //cy.wait(10000)
    }


    EnterFirstName(fname){
        cy.get(homepageHrm.firstName).type(fname,{force:true})
    }

    EnterMiddleName(mname){
        cy.get(homepageHrm.MiddleName).type(mname)
    }

    EnterLastName(lname){
        cy.get(homepageHrm.lastName).type(lname)
    }

    EnterEmp_id(id){
        cy.get(homepageHrm.add_empID).type(id)
    }

    click_save(){
        cy.get(homepageHrm.saveBtn).click({force:true})
        cy.contains('Success').should('be.visible')
    }


}