///<reference types = "cypress"/>

import LoginPage from "../../../support/PageObjectModel/loginPage";
import HomePage from "../../../support/PageObjectModel/HomePage";

describe('login',function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(function(){
        loginPage.visitLoginPage();
    })

    it('should login with valid credentials',function(){
        loginPage.login('admin','admin123')
        homePage.verifyHomePage()
        
    })

    // afterEach(function(){
    //     homePage.logOut()
    // })
})