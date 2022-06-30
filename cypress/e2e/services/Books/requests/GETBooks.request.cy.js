/// <reference types="cypress" />

function getBooks() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'Books',
      failOnStatusCode: false
    })
}

function getOneBook(id) {
  // cy.request - client http
  return cy.request({
    method:'GET',
    url:'Books/'+id,
    failOnStatusCode: false
  })
}
  
  export { getBooks };
  export { getOneBook };