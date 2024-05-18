///<reference types ="cypress"/>

describe('verify the gorest API with Create , Update and Delete user', function () {

    it('gorest API with Create , Update and Delete user', function () {

        let token = "95e34f08d84699430ccc33dbdf72bdecabef239abaede4654526c5916095d7c8"
        let id = undefined

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body:
            {
                name: "Arjun Jadhav",
                gender: "male",
                email: `arjun${Math.floor(Math.random() * 10000) + 1}@15ce.com`,
                status: "active"
            },
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        }).then(function (res) {
            cy.log(res)
            cy.log(res.body.id)
            expect(res.status).to.eq(201)

            id = res.body.id

        }).then(function () {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    name: "Mahesh Jadhav",

                    email: `mahesh${Math.floor(Math.random() * 10000) + 1}@15ce.com`,
                    status: "active"
                },
                headers:
                {
                    "Authorization": `Bearer ${token}`
                }

            })
                .then(function (res) {
                    cy.log(res)
                    cy.log(res.body.email)
                    expect(res.status).to.eq(200)
                }).then(function () {
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers:
                        {
                            "Authorization": `Bearer ${token}`
                        }

                    }).then(function(res){
                        cy.log(res)
                        expect(res.status).to.eq(204)
                    })
                })
        })
    })
})