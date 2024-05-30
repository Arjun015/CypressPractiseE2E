///<reference types ="cypress"/>

import { PlaceOrder } from "../../Vegitable_shetty/vegetble";
import vegiTable from "../../../fixtures/vegeTable.json"

const vegiObj = new PlaceOrder()

describe("Place Order of vegitable",function(){

    it('verify the complete process of vegitable placed order',function(){

        vegiObj.VisitUrl()
        vegiObj.Verify_searchVegitable(vegiTable.vegiData.vegi)
        //vegiObj.click_On_searchButton()
        vegiObj.Add_To_Cart()
        vegiObj.verify_Bucket()
       // vegiObj.verify_PlaceOrder()
        //vegiObj.select_Country()
        vegiObj.check_On_checkBox()
        vegiObj.Proceed()
        vegiObj.verify_successMessage().should('have.text',vegiTable.vegiData.successMsg)
    })
})
