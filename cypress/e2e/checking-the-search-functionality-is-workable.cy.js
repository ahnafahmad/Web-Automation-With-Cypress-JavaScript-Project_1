import { data } from "./data"
import { elements } from "./elements"

describe('Checking Search Functionality', () => {

  beforeEach(function () {
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  it('Search Functionality Checking', () => {

    cy.get(elements.searchbar).first().should('be.visible').type(data.firstProduct + '{enter}')

    cy.contains(elements.searchedProductLink, 'Fusion Backpack').should('be.visible');

  })
})