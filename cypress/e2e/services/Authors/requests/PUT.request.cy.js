/// <reference types="cypress" />

const payload = require('../payloads/change-authors.json')

function change(id) {
  return cy.request({
    method: 'PUT',
    url: `Authors/${id}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payload
  })
}

export { change };