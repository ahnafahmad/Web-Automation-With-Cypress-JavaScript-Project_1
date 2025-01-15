import {
  data,
  paths
} from "./data"
import {
  elements
} from "./elements"

describe('Checking Search Functionality', () => {

  beforeEach(function () {
    cy.visit(paths.homepage)
  })

  it('Search Functionality Checking', () => {

    //Search a Product
    cy.get(elements.searchbar).first().should('be.visible').type(data.firstProduct + '{enter}')

    cy.contains(elements.searchedProductLink, data.firstProduct).should('be.visible');

  })
})