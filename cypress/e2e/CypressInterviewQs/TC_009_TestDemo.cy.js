///<reference types ="cypress"/>

//specific browser run at level of test suit
describe('Google navigation',{browser:'chrome'},function(){

    it('google navigation',function(){
        cy.log('testCase passed')
    })
        
    
   
})


//specific browser run at level of testCase
describe('Google navigation',function(){

    it('google navigation',{browser:'chrome'},function(){
        cy.log('testCase passed')
    })
        
    
   
})


// How to read file in cypress?
describe('verify the readfile in cypress',function(){
    it('read file in cypresss',function(){

        cy.readFile('data.json').then(function(aa){
            cy.log(aa.name)
    
        })

    })

    
})


//// How to write file in cypress?

describe('verify the readfile in cypress',function(){
    it('read file in cypresss',function(){

        cy.writeFile('data.json',{fname:'Arjun',lname:'Jadhav'})

    })

    
})
