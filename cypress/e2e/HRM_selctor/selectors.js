///<reference types = "cypress"/>


const login = {
    userName : 'input[name="username"]', 
    passWord : 'input[name="password"]',
    loginBtn : 'button[type="submit"]',
    logo : "img[alt='orangehrm-logo']" // .eq(1)



}

const homepageHrm = {

    DashBoardVisible :'.oxd-main-menu-item.active',
    PIM_element : ".oxd-text.oxd-text--span.oxd-main-menu-item--name" ,// eq(1)
    Add_employee : ".oxd-topbar-body-nav > ul > :nth-child(3)",
    firstName :'input[name="firstName"]',
    MiddleName :'input[name="middleName"]',
    lastName : 'input[name="lastName"]',
    add_empID :'.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input' ,// eq(4)
    saveBtn :'.oxd-button--secondary',
    successMessage :'Success'
}

export {login,homepageHrm}