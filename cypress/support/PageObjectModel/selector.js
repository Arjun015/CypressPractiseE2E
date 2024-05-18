///<reference types ="cypress"/>
const loginPageSelector = {

    userNameInput : '[name="username"]',
    passwordInput :'[name="password"]',
    loginButton : 'button[type="submit"]'
}



const HomePageSelector = {
    welcomeMsg : 'img[alt="client brand banner"]',
    logOutLink : '.oxd-userdropdown-link'
}

export {loginPageSelector, HomePageSelector}
