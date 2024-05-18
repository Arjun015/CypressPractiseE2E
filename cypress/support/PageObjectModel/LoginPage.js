///<reference types ="cypress"/>

import { loginPageSelector } from "./selector";

class LoginPage {

    visitLoginPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    getUsernameInput(){
        return cy.get(loginPageSelector.userNameInput)
    }

    getPasswordInput(){
        return cy.get(loginPageSelector.passwordInput)
    }

    getloginButton(){
        return cy.get(loginPageSelector.loginButton)
    }

    login(username , password){
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getloginButton().click()

    }
}
export default LoginPage;