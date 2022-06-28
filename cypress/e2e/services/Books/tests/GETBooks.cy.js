import * as GETBooks from '../requests/GETBooks.request.cy'

describe('GET',() =>{
    it('Lista todos os livros',() =>{
        GETBooks.getBooks().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null; // cannot be null
        });
    });
});