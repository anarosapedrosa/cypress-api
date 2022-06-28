/// <reference types="cypress" />

const payloadAdd = require('../payloads/add-activity.json')

function addActivity() {
  return cy.request({
    method: 'POST',
    url: 'Activities',
    failOnStatusCode: false,
    body: payloadAdd
  })
}

export { addActivity };