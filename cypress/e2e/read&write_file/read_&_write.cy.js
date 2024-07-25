///<reference types ="cypress"/>

describe('read and wright file operation in cypress', function () {

    it('Read and wright operation-1', function () {

        let string1 = "ARJUN "
        let string2 = "JADHAV"

        //reading the file       forward slash 
        cy.readFile('cypress/e2e/read&write_file/files/info.txt').then(function (data) {
            cy.log(data)
        })

        //writing the file
        cy.writeFile('cypress/e2e/read&write_file/files/info.txt',string1)

        cy.readFile('cypress/e2e/read&write_file/files/info.txt').then(function (data) {
            cy.log(data)
        })
        
        //{flag:'a+'} : Data add on existing data/dataSet
        cy.writeFile('cypress/e2e/read&write_file/files/info.txt',string2 , {flag:'a+'}) 

        
        cy.readFile('cypress/e2e/read&write_file/files/info.txt').then(function (data) {
            cy.log(data)
        })
    })


    it('Read and Write file on FlipCart',function(){

        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        
        cy.writeFile('cypress/e2e/5-readWriteFile/files/infoExel.csv',`Name , Price \n`)
        cy.get('[class="yKfJKb row"]').each(function(el){
            let nameM = el.find('div[class="KzDlHZ"]').text()
            let price = el.find('[class="Nx9bqj _4b5DiR"]').text().replace("₹","").replace(',',"")
            if (price < 7000){
                cy.writeFile('cypress/e2e/read&write_file/files/infoExel.csv',`"${nameM}","${price}"`)
            }
           
         })
        
    })


    })
