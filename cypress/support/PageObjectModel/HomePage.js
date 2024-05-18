/// <reference types = "cypress"/>

import { HomePageSelector } from "./selector";

class HomePage {
    verifyHomePage(){
       cy.get(HomePageSelector.welcomeMsg).should('be.visible')
       cy.get(HomePageSelector.logOutLink).eq(4).should('be.visible')
    }

    logOut(){
        cy.get(HomePageSelector.logOutLink).eq(4).click({force:true}).log('should be logout')

    }
}
export default HomePage;

