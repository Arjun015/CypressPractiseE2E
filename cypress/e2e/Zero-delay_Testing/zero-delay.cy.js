///<reference types = "cypress"/>

/*
Zero delay Testing: {delay:0} Improve the testCase performance.
*/

describe('Zero delay testing',function(){

    it('TC_001:zero delay',function(){

        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        cy.get('input[type="text"]').eq(3).type('Arjun Jadhav',{force:true}) // 00:15 sec is taking

        cy.get('input[type="text"]').eq(3).type('Arjun Jadhav',{delay:0},{force:true})// 00:05 sec is taking

    })


    it.only('TC_002:zero delay',function(){

       cy.visit('https://wordcounter.net/')
       //cy.get("textarea[id='box']").type("Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later.")

       //{delay:0} - improve the performance.
       cy.get("textarea[id='box']").type("Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later.",{delay:0})

    })

})