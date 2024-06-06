export class AutomationExTestingPage {

    weblocatorEx = {
        urlAutoE : 'https://automationexercise.com/',
        signUpTab :'a[href="/login"]',
        signUsername :'[data-qa="signup-name"]' ,
        signEmail :'[data-qa="signup-email"]',
        signButton :'[data-qa="signup-button"]',
        TextValidate: 'div[class="login-form"]',

        // Enter Account Information
        passWord :'#password',
        day_DOB :'#days',   // select Day
        month_DOB:'#months', // select Month
        year_DOB :'#years', // select Year

        //checkBox
        checkBox1 : '#newsletter',
        checkBox2 : '#optin',

        //Address Information
        firstName :'[data-qa="first_name"]',
        lastName:'[data-qa="last_name"]',
        CompanyName :'[data-qa="company"]',
        Address1 :'#address1',
        Address2 : '#address2',
        country : '#country',
        state :'#state',
        city :'#city',
        zipcode :'#zipcode',
        MobNumber :'#mobile_number',
        CreatAccountButton :'[data-qa="create-account"]',
        TextValidate_2 : 'b',
        continewBtn :'[data-qa="continue-button"]',
        TextValidate_3 :':nth-child(10) > a'

    }

    visitUrlEx(){
        cy.visit(this.weblocatorEx.urlAutoE)
    }

    btnClick(css){
        cy.get(css).click()
    }

    signUpForm(signupUname, signupEmail){
        cy.get(this.weblocatorEx.signUsername).type(signupUname)
        cy.get(this.weblocatorEx.signEmail).type(signupEmail)
    }

    ValidationAssert(cssAssert){
        return cy.get(cssAssert)

    }

    // Enter Account Information 

    enterPassword(pass){
        cy.get(this.weblocatorEx.passWord).type(pass)
    }

    select_DateofBirth(day,month,year){
        cy.get(this.weblocatorEx.day_DOB).select(day)
        cy.get(this.weblocatorEx.month_DOB).select(month)
        cy.get(this.weblocatorEx.year_DOB).select(year)

    }

    checkBox(){
        cy.get(this.weblocatorEx.checkBox1).check()
        cy.get(this.weblocatorEx.checkBox2).check()
    }

    //Address Information

    fill_AddressInfo(fn,ln,cn,address_1,address_2){
        cy.get(this.weblocatorEx.firstName).type(fn)
        cy.get(this.weblocatorEx.lastName).type(ln)
        cy.get(this.weblocatorEx.CompanyName).type(cn)
        cy.get(this.weblocatorEx.Address1).type(address_1)
        cy.get(this.weblocatorEx.Address1).type(address_2)
    }

    select_Country(country){
        cy.get(this.weblocatorEx.country).select(country)

    }

    fill_AddressInfo_Remaining(state , city ,zip,mob){
        cy.get(this.weblocatorEx.state).type(state)
        cy.get(this.weblocatorEx.city).type(city)
        cy.get(this.weblocatorEx.zipcode).type(zip)
        cy.get(this.weblocatorEx.MobNumber).type(mob)

    }

    




}


























































































// export default class MyTestPage {

//     webselector = {

//         AEurl : 'https://automationexercise.com/',
//         loginSignup : 'a[href="/login"]',
//         signupUname  :'input[data-qa="signup-name"]',
//         signupEmail : 'input[data-qa="signup-email"]',
//         signButton : 'button[data-qa="signup-button"]',
//         txtValidate : '.login-form ',
//         titleMr : '#id_gender1',
//         titleMrs : '#id_gender2',
//         Password : 'input[data-qa="password"]',


//     }

//     visit(){
//     cy.visit(this.webselector.AEurl)

//     }

//     // signUp functinality

//     buttonClick(css){
//         cy.get(css).click()
//     }

//     newUserSignup (data){
//         cy.get(this.webselector.signupUname).type(data.signupUname)
//         cy.get(this.webselector.signupEmail).type(data.signupEmail)
//     }

//     validateText(css,txt){
//         cy.get(css).should('contain',txt)
//     }

//     //Create user fubctionality

//     // CreateUser(title,data){
//     //     let title = undefined
//     //    if(data.title == 'Mr'){

//     //     title = this.webselector.titleMr
//     //     }else{
//     //     title = this.webselector.titleMrs
//     //     }

//     // }

    
// }