/// <reference types ="cypress"/>


import { Login } from "../../Pages/orgHrm3";
import orgdata from "../../../fixtures/orgHrm3.json"

describe('verify the orange hrm login functionality ',function(){

    const hrm = new Login()

    it('TC_001-verify the orangeHrm functionality with valid credentials',function(){

        hrm.visitUrl()
        hrm.loginTask(orgdata.valid)
        cy.url().should('contain','/dashboard/index')


    })

    it('TC_002-verify the orangeHrm functionality with Invalid credentials',function(){
         hrm.visitUrl()
        hrm.loginTask(orgdata.Invalid)
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
        

    })
})