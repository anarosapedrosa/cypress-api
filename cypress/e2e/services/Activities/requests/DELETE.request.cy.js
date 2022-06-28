/// <reference types="cypress" />

function deleteAct(id) {
    return cy.request({
      method: 'DELETE',
      url: `Activities/${id}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteAct };