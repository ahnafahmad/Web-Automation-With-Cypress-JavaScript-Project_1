const {
    signUp,
    login,
    generateRandomNumber
} = require("../support/utils")
const {
    data
} = require("./data")
const {
    elements
} = require("./elements")

describe('Cart Testing', () => {

    beforeEach(function () {
        cy.visit('https://magento.softwaretestingboard.com/')
    })

    it('Add Product To the Cart', () => {

        let firstname = data.firstName + generateRandomNumber(3).toString()
        let lastname = data.lastName + generateRandomNumber(3).toString()
        let email = data.emailfirstPart + generateRandomNumber(3).toString() + data.emailSecondPart
        let pass = data.password + generateRandomNumber(5).toString()

        Cypress.env('email', email);
        Cypress.env('pass', pass);

        login(email, pass);

        cy.wait(3000)
        cy.elementExists(elements.errorMessage).then(el => {

            if (el) {
                const text = el.text();
                if (text.includes("The account sign-in was incorrect")) {
                    signUp(firstname, lastname, email, pass, pass)
                }
            }
        })

        cy.get(elements.searchbar).first().should('be.visible').type(data.secondProduct + '{enter}')

        cy.contains(elements.searchedProductLink, data.secondProduct).should('be.visible').click();

        cy.get(elements.size).first().click();
        cy.get(elements.color).first().click();

        cy.get(elements.price).first().then(($el) => {

            let priceValue = $el.text().trim();

            cy.get(elements.quantity).first().clear().type(data.productQuantity);

            cy.get(elements.addToCart).click()
            cy.wait(3000)

            cy.get(elements.showCart).click()

            cy.get(elements.viewcart).click()

            cy.get(elements.pageTitle).should('exist');

            cy.get(elements.productName).first().contains(data.secondProduct);

            cy.get(elements.cartPrice).first().contains(priceValue)

            cy.get(elements.cartQuantity).should('have.value', data.productQuantity)
        })
    })

    it('Remove Product From the Cart', () => {

        const email = Cypress.env('email');
        const pass = Cypress.env('pass');

        login(email, pass);
        cy.wait(2000)

        cy.get(elements.showCart).click()

        cy.get(elements.viewcart).click()

        cy.get(elements.removeItem).click()
    })
})