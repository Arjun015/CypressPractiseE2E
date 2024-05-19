///<reference types ="cypress"/>

import { Homeage } from "../../PagesSelectors/HomePage";  // import from class page

const homepageObj = new Homeage()  // create obj

import homePageData from "../../../fixtures/homePageData.json" // inport testdata fro fixture

//scenario :-
//1.login
//2.Search 'macbook' and click on the search btn
//3."Add To Cart"
//4."verify the success massage"


describe("Verify the HomePage scenario",function(){

    before(function(){
        cy.login(homePageData.login.username,homePageData.login.password)
    })

    it('Validate the HomePage functionality on search Product and add to cart',function(){

        homepageObj.searchProduct(homePageData.product.productName)
        homepageObj.Add_To_cart()
        homepageObj.verifySuccessMassage().should('contain',homePageData.message.successMessage).log(homePageData.product.productName)
    
    })

})

