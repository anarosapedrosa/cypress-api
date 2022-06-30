/// <reference types="cypress" />

function getActivities(){
    return cy.request({
        method:'GET',
        url:'Activities',
        failOnStatusCode: false
    })
}

function getOneActivity(id){
    return cy.request({
        method:'GET',
        url:`Activities/${id}`,
        failOnStatusCode: false
    })
}

export {getActivities};
export {getOneActivity};