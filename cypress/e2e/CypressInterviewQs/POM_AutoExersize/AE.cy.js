///<reference types ="cypress"/>

import {AutomationExTestingPage} from "../../PagesSelectors/automationExersize"

import PyloadAutoE from "../../../fixtures/PyloadAutoE"

const autoObj = new AutomationExTestingPage()

describe('verify the functionality of new user Creation',function(){

    it('New user creation',function(){

        autoObj.visitUrlEx()
        autoObj.btnClick(autoObj.weblocatorEx.signUpTab)
        autoObj.signUpForm(PyloadAutoE.signupUname,PyloadAutoE.signupEmail)
        autoObj.btnClick(autoObj.weblocatorEx.signButton)
        autoObj.ValidationAssert(autoObj.weblocatorEx.TextValidate).should('contain','Enter Account Information')

        // Enter Account info

        autoObj.enterPassword(PyloadAutoE.passWord)
        autoObj.select_DateofBirth(PyloadAutoE.day,PyloadAutoE.month,PyloadAutoE.year)
        autoObj.checkBox()
        autoObj.ValidationAssert(autoObj.weblocatorEx.TextValidate).should('contain','Address Information')

        //Address Information

        autoObj.fill_AddressInfo(PyloadAutoE.fn,PyloadAutoE.ln,PyloadAutoE.cn,PyloadAutoE.address_1,PyloadAutoE.address_2)
        autoObj.select_Country(PyloadAutoE.country)
        autoObj.fill_AddressInfo_Remaining(PyloadAutoE.state,PyloadAutoE.city,PyloadAutoE.zipcode,PyloadAutoE.MobNumber)
        autoObj.btnClick(autoObj.weblocatorEx.CreatAccountButton)
        autoObj.ValidationAssert(autoObj.weblocatorEx.TextValidate_2).should('have.text','Account Created!')
        autoObj.btnClick(autoObj.weblocatorEx.continewBtn)
        autoObj.ValidationAssert(autoObj.weblocatorEx.TextValidate_3).should('have.text',' Logged in as arjun')
    })

})













































































// import MyTestPage from "../../PagesSelectors/automationExersize"
// import dataE from "../../../fixtures/PyloadAutoE"



// describe('verify the signup functionality',function(){

    

//     it('Creating the new user',function(){

//         let pg  = new MyTestPage()

//         pg.visit()
//         pg.buttonClick(pg.webselector.loginSignup)
//         pg.newUserSignup(dataE)
//         pg.buttonClick(pg.webselector.signButton)
//         pg.validateText(pg.webselector.txtValidate)


         


//     })

// })