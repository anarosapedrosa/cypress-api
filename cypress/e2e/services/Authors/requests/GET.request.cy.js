/// <reference types="cypress" />

function getAuthors(){
    return cy.request({
        method:'GET',
        url:'Authors',
        failOnStatusCode: false
    })
}

function getOneAuthor(id){
    return cy.request({
        method:'GET',
        url:'Authors/'+id,
        failOnStatusCode: false
    })
}

function getAuthorsofIdBook(id){
    return cy.request({
        method:'GET',
        url:'Authors/authors/books/'+id,
        failOnStatusCode: false
    })
}

export {getAuthors};
export {getOneAuthor};
export {getAuthorsofIdBook};