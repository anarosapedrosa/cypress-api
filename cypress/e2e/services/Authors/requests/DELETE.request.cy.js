/// <reference types="cypress" />

function deleteAuthor(id) {
    return cy.request({
      method: 'DELETE',
      url: `Authors/${id}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteAuthor };