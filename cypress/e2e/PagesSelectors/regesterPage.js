///<reference types="cypress"/>

import { registerPage } from "./selectorsRegister"


export class RegisterPage {

    openUrl(URL){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(Fname){
        cy.get(registerPage.firstName).type(Fname)
    }

    enterLastName(Lname){
        cy.get(registerPage.lastName).type(Lname)
    }

    enterEmail(Email){
        cy.get(registerPage.email).type(Email)
    }

    enterTelephone(teleph){
        cy.get(registerPage.telephone).type(teleph)
    }

    enterPassword(pass){
        cy.get(registerPage.password).type(pass)
    }

    enterConfirmPassword(confirmPass){
        cy.get(registerPage.confirmPassword).type(confirmPass)
    }

    clickPolicyCheckBox(){
        cy.get(registerPage.policyCheckbox).check()
    }

    contineuButton(){
        cy.get(registerPage.continueBtn).click().should('be.visible')
        cy.get('h1').should('have.text',"Your Account Has Been Created!")

    }


}

