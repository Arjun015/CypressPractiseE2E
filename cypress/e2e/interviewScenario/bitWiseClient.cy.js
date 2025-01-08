///<reference types ="cypress"/>
/*


// Interview scenario : I have one json response in API testing which contain BookID,BookAuthor,BookName,
                         BookLocation:['mumbai','Pune','Nashik'].

                       when loggin the book website throught the api authentication token first and 
                        then getting this json response After I want to fetch this json responce one by one properly using cypress automation tool
                         How we can achive this  ?
*/
import { bookJson } from '../../fixtures/BookJson.json'

describe('To Test the book API', function () {

    let authToken;    // To store the authentication token
    let apiUrl = 'https://yourapi.com/api/books'; // Replace with your API URL

    // Step 1: Login to the API and get authentication token


    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://yourapi.com/api/login', // Replace with your login URL
            body: {
                userName: 'yourUserName',
                passWord: 'yourPassword'// add your credentials
            }
        }).then(function (responce) {
            cy.log(responce)

            // Check if login is successful
            expect(response.status).to.eq(200)

            // Store the authentication token for future requests
            let authToken = responce.body.token

        })
    })

    // Step 2: Fetch the book details using the authToken

    it('fetch and validate book details from API', function () {
        cy.request({
            method: 'GET',
            url: apiUrl,
            headers: {
                Authorization: `Bearer ${authToken}` // use the token for authentication 
            }
        }).then(function (responce) {
            expect(responce.status).to.eq(200) // // Check if the response is successful

            // Step 3: Parse the JSON response

            let book = response.body; // Assuming the response contains the book details directly

            // validate the book properties one by one

            expect(book).to.have.property('BookID')
            expect(book).to.have.property('BookAuthor');
            expect(book).to.have.property('BookName');
            expect(book).to.have.property('BookLocation');

            // You can also print the values to the console
            cy.log(`BookID: ${book.BookID}`);
            cy.log(`BookAuthor: ${book.BookAuthor}`);
            cy.log(`BookName: ${book.BookName}`);
            cy.log(`BookLocation: ${book.BookLocation}`);

            // Validate that BookLocation contains the expected locations

            expect(book.BookLocation).to.includes.members(['mumbai', 'Pune', 'Nashik'])

            // Optionally, you can loop through BookLocation if needed

            book.BookLocation.forEach(locations => {
                cy.log(`The book is avilable in :${locations}`)
            });
        })
    })
})




/*
json response 
[
    {
      "BookID": 1,
      "BookAuthor": "J.K. Rowling",
      "BookName": "Harry Potter and the Sorcerer's Stone",
      "BookLocation": ["London", "New York", "Los Angeles"]
    },
    {
      "BookID": 2,
      "BookAuthor": "George R.R. Martin",
      "BookName": "A Game of Thrones",
      "BookLocation": ["Winterfell", "King's Landing", "Essos"]
    },
    {
      "BookID": 3,
      "BookAuthor": "J.R.R. Tolkien",
      "BookName": "The Hobbit",
      "BookLocation": ["Shire", "Rivendell", "Mirkwood"]
    },
    {
      "BookID": 4,
      "BookAuthor": "Dan Brown",
      "BookName": "The Da Vinci Code",
      "BookLocation": ["Paris", "Rome", "London"]
    }
  ]
  */