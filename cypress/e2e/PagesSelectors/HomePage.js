
export class Homeage {

    HomepageLocator = {

        searchInput: 'input[name="search"]',
        click_SearchButton: '.btn-default',
        product: 'img[title="MacBook"]',
        add_To_cart: 'Add to Cart',
        SuccessMessage: "div.alert.alert-success.alert-dismissible"

    }

    //2.Search 'macbook' and click on the search btn
    searchProduct(productName) {
        cy.get(this.HomepageLocator.searchInput).type(productName)
        cy.get(this.HomepageLocator.click_SearchButton).click()
    }

    // add to cart 
    Add_To_cart() {
        cy.contains(this.HomepageLocator.add_To_cart).first().click()
    }

    //verify success message

    verifySuccessMassage() {
        return cy.get(this.HomepageLocator.SuccessMessage) // return , further action on this locators 
                                                           // othrwise return undefined
    }




}