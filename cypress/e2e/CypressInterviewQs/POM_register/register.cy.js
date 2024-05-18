///<reference types="cypress"/>

import {RegisterPage} from "../../PagesSelectors/regesterPage"

import registerData from "../../../fixtures/registerData.json"

const registrOBJ = new RegisterPage()

//const email = `arjun${Math.floor(Math.random() * 10000) + 1}@15ce.com`;

describe('verify the register page ',function(){

    
    

    it('verify the register',function(){
        //const email = `admin${Math.floor(Math.random() * 10000) + 1}@15ce.com`;
       
        registrOBJ.openUrl()
        registrOBJ.enterFirstName(registerData.firstName)
        registrOBJ.enterLastName(registerData.lastName)
        registrOBJ.enterEmail(registerData.email)
        registrOBJ.enterTelephone(registerData.telephone)
        registrOBJ.enterPassword(registerData.password)
        registrOBJ.enterConfirmPassword(registerData.confirmPassword)
        registrOBJ.clickPolicyCheckBox()
        registrOBJ.contineuButton()




    })
})