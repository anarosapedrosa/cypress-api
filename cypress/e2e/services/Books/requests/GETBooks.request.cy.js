/// <reference types="cypress" />

function getBooks() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'Books',
      failOnStatusCode: false
    })
}
  
  export { getBooks };