///<reference types = "cypress"/>



import { POST as postPayload, PUT as putPayload } from '../../fixtures/apiFixture.json';


describe('User API Tests', () => {

    let token = "95e34f08d84699430ccc33dbdf72bdecabef239abaede4654526c5916095d7c8"

    it('should create a new user via POST request', () => {
        const email = `arjun${Math.floor(Math.random() * 10000) + 1}@15ce.com`;
        const postPayloadWithEmail = { ...postPayload, email };
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: postPayloadWithEmail,
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            cy.log(response)
            //expect(response.status).to.equal(201)
            cy.log(response.body.id)
            expect(response.status).to.equal(201)
            //id = response.body.id
        });
    });

    it('should update an existing user via PUT request', () => {
        // Assume you already have an existing user ID

        const email = `aarti${Math.floor(Math.random() * 10000) + 1}@15ce.com`;
        const putPayloadWithEmail = { ...putPayload, email };
        cy.request({
            method: 'PUT',
            url: "https://gorest.co.in/public/v2/users/6905189",
            body: putPayloadWithEmail,
            headers:
            {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.equal(200);
            // Additional assertions if needed
        });
    });
});
