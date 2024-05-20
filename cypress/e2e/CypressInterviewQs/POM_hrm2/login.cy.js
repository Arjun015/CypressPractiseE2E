/// <reference types ="cypress"/>

import { OrangeHrm } from "../../HRM_selctor/HRM_class";
import dataHrm from "../../../fixtures/dataHrm.json"

const orangeObj = new OrangeHrm()

describe("verify the OrangeHrm functionality",function(){

    it('OrangeHRM functionality',function(){
        orangeObj.visitURL()
        orangeObj.VerifyLogo()
        orangeObj.enterUserName(dataHrm.loginHrm.userName)
        orangeObj.enterPassword(dataHrm.loginHrm.passWord)
        orangeObj.LoginBtn().should('contain','Dashboard')
        orangeObj.click_PIM()
        orangeObj.addEmployee()
        orangeObj.EnterFirstName(dataHrm.HomepageHrm.firstname)
        orangeObj.EnterMiddleName(dataHrm.HomepageHrm.MiddleName)
        orangeObj.EnterLastName(dataHrm.HomepageHrm.lastName)
        orangeObj.EnterEmp_id(dataHrm.HomepageHrm.id)
        orangeObj.click_save()


    })
})
