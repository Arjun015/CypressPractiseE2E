///<reference types ="cypress"/>

import { weblocatorsBucket } from "./vegetableSelectors";

export class PlaceOrder{

    VisitUrl(){
        cy.visit('')
    }

    Verify_searchVegitable(vegi){
        cy.get(weblocatorsBucket.searchVegitable).first().type(vegi)
        cy.get(weblocatorsBucket.clickSearchBtn).first().click()
    }

    // click_On_searchButton(){
    //     cy.get(weblocatorsBucket.clickSearchBtn).first().click()
    // }

    Add_To_Cart(product){
        cy.get(weblocatorsBucket.productLst).each((el, i) => {
            // 'Cashews - 1 Kg'
            let vegitable =  el.text().replace(' - 1 Kg', ' ').trim() // Cashews 
            if (vegitable == product) {
                cy.get(weblocatorsBucket.addtoCart).eq(i).click({ force: true })

            }
        })
    }

    verify_Bucket(){
        cy.get(weblocatorsBucket.click_On_bucket).click()
    }

    verify_ProceedTocheckout(select){
        cy.get(weblocatorsBucket.proceedTockeckout).click()
        cy.contains('Place Order').click()
        cy.select(weblocatorsBucket.select_country).select(select)
    }

    // verify_PlaceOrder(){
    //     cy.contains('Place Order').click()
    // }

    // select_Country(select){
    //     cy.select(weblocatorsBucket.select_country).select(select)
    // }

    check_On_checkBox(){
        cy.get(weblocatorsBucket.checkBox_check).check()
    }

    Proceed(){
        cy.get(weblocatorsBucket.Proceed).click()
    }

    verify_successMessage(){
       return  cy.get(weblocatorsBucket.successMessage)
    }







    
      

}