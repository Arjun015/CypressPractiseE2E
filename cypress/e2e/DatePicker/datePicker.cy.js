///<reference types ="cypress"/>

describe('DatePicker functionality in cypress', function () {
    it('verify the datePicker functionality', function () {


        let todayDate = new Date()         // for current date
        cy.log(`Today date is ${todayDate}`)

        let todayD = todayDate.getDate()  // Today date
        cy.log(`Today date is ${todayD}`)

        let currentMonth = todayDate.getMonth() // current month
        cy.log(`current month is ${currentMonth}`)

        let currentYear = todayDate.getFullYear() // current Year
        cy.log(`current full year is ${currentYear}`)



        let todayMonthShort = todayDate.toLocaleString('default', { month: 'short' }) // for short date
        cy.log(`todaymonthS is  ${todayMonthShort}`)

        let todayMonthLong = todayDate.toLocaleString('default', { month: 'long' }) // for long date
        cy.log(`todaymonthL is  ${todayMonthLong}`)

        //for future date
        let DateF = new Date()
        DateF.setDate(DateF.getDate() + 180)

        cy.log(`DateF ${DateF}`)

        let dateF2 = DateF.getDate()
        cy.log(`dateF2 ${dateF2}`)

        let monthF = DateF.getMonth()
        cy.log(`monthF ${monthF + 1}`)

        let monthFs = DateF.toLocaleString("default", { month: "short" })
        cy.log(`monthFs ${monthFs}`)

        let monthFL = DateF.toLocaleString("default", { month: 'long' })
        cy.log(`monthFL ${monthFL}`)

        let yearF = DateF.getFullYear()
        cy.log(`yearF ${yearF}`)







        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        function selectYearMonth() {
            cy.get('.datepicker-switch').first().then(function (currentDate) {
                cy.log(currentDate.text())
                if (!currentDate.text().includes(DateF.getFullYear())) {
                    cy.get('.next').first().click()
                    selectYearMonth()
                }
            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (currentDate) {
                    cy.log(currentDate.text())
                    if (!currentDate.text().includes(DateF.toLocaleString('default', { month: 'long' }))) {
                        cy.get('.next').first().click()
                        selectYearMonth()
                    }
                })


            })
        }

        function selectDate() {
            cy.get('[class="day"]').contains(dateF2).click()
        }
        selectYearMonth()
        selectDate()

    })
})