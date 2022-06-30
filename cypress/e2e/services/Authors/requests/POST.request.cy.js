/// <reference types="cypress" />

const payload = require('../payloads/add-authors.json')

function postAuthors() {
  return cy.request({
    method: 'POST',
    url: 'Authors',
    failOnStatusCode: false,
    body: payload
  })
}

function postAuthorsWithError(payload2) {
  return cy.request({
    method: 'POST',
    url: 'Authors',
    failOnStatusCode: false,
    body: payload2
  })
}


export { postAuthors };
export { postAuthorsWithError };