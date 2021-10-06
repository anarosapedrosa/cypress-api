import * as GETBooks from '../requests/GETBooks.request'

describe('GET Books',() =>{
    it('List all books',() =>{
        GETBooks.allBooks().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null; // cannot be null
            Cypress.log(response.body);
        });
    });
});