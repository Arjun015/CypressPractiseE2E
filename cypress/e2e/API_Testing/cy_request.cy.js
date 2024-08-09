///<reference types ="cypress"/>

describe('verify the functionality of API testing',function(){

    it('GET-Method  for retrive resource data from server or dataBase API testing',function(){
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method : 'GET'
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
            cy.log(res.body.data[0].first_name,res.body.data[0].last_name)
            expect(res.body.data[0].first_name).to.eq('Michael')
            expect(res.body.data[0].last_name).to.eq('Lawson')
            expect(res.statusText).to.eq("OK")
        })
    })

    it('POST-Method for create resource in Server in API Testing',function(){
        cy.request({
            url:'https://reqres.in/api/users',
            method : 'POST',
            body :{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(201)
            //cy.log(res.body.data.first_name)//George
        })
    })
})