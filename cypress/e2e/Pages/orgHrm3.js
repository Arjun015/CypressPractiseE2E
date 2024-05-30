export class Login {

    pageLocator = {
        
        url : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        userName : '[name="username"]',
        password : '[name="password"]',
        loginButton : '[type="submit"]'
    }

    visitUrl(){
        cy.visit(this.pageLocator.url)
    }

    loginTask(Uname , pass){
        cy.get(this.pageLocator.userName).type(Uname)
        cy.get(this.pageLocator.password).type(pass)
        cy.get(this.pageLocator.loginButton).click()
    }
}