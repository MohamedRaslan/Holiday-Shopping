// type definitions for Cypress object "cy"
/// <reference types="cypress" />
const holidayShopping = require("../fixtures/holiday_shopping_data.json")




context('Holiday Shopping Hackathon For Fun', function () {
    // partToRun : Is the part you want to run from the hackathon instructions
    // https://applitools.com/hackathon-v20-3-instructions/
    // By default, it's the first part, but you can use the CLI to set the env key 'RUN_PART' to different value "1, 2, or 3"
    // https://docs.cypress.io/guides/guides/command-line.html#cypress-run-env-lt-env-gt

    var partToRun = [1, 2, 3].includes(Cypress.env('RUN_PART')) ? holidayShopping[Cypress.env('RUN_PART') - 1] : holidayShopping[0]

    describe(`Part ${partToRun.partNumber} - ${partToRun.partName}`, function () {
        beforeEach(function () {
            cy.visit(`/${partToRun.url}`)
        })

        afterEach(() => {
            cy.eyesClose()
        })

        it(`Check Main Page`, function () {
            //Just asserting that  I am in the right page
            cy.url().should('include', `/${partToRun.url}`)

            //Initializing eyes
            cy.eyesOpen({
                appName: 'AppliFashion',
                batchName: 'Holiday Shopping',
                testName: 'Test 1',
                browser: partToRun.browser
            })

            //Taking a snapshot of the whole page
            cy.eyesCheckWindow({
                tag: 'main page',
                target: 'window',
                fully: true
            })

        })

        it(`Check Filtered Product Grid`, function () {
            //Just asserting that  I am in the right page
            cy.url().should('include', `/${partToRun.url}`)

            //Initializing eyes
            cy.eyesOpen({
                appName: 'AppliFashion',
                batchName: 'Holiday Shopping',
                testName: 'Test 2',
                browser: partToRun.browser
            })

            //Clicking on it the Black filter in colors section
            cy.get('#colors__Black').scrollIntoView().click()
            //Asserting the Fillter button is visible and click on it
            cy.get('#filterBtn').scrollIntoView().should('be.visible').click()

            //Taking a snapshot of the grid region only
            cy.eyesCheckWindow({
                tag: 'filter by color',
                target: 'region',
                selector: '#product_grid'
            })
        })

        it(`Check Product Details`, function () {
            //Just asserting that  I am in the right page
            cy.url().should('include', `/${partToRun.url}`)

            //Initializing eyes
            cy.eyesOpen({
                appName: 'AppliFashion',
                batchName: 'Holiday Shopping',
                testName: 'Test 3',
                browser: partToRun.browser
            })

            //Asserting the image is actually to the 'Appli Air x Night' product and click on it
            cy.get('#product_1 img').scrollIntoView().should(($img) => {
                expect($img.attr('alt')).to.contains.any.string('Appli Air x Night')
            }).click()

            //Taking a snapshot of the whole page
            cy.eyesCheckWindow({
                tag: 'product details',
                target: 'window',
                fully: true
            })
        })

    })

})
