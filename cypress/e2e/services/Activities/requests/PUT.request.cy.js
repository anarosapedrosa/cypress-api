/// <reference types="cypress" />

const payloadChange = require('../payloads/change-activity.json')

function changeActivity(id) {
  return cy.request({
    method: 'PUT',
    url: `Activities/${id}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payloadChange
  })
}

export { changeActivity };