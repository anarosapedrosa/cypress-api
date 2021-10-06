import * as POSTBooks from '../requests/POSTBooks.request'

context('POST Books',() =>{
    it('Add a new book', () =>{
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Name of the Book");
            expect(response.body.description).to.eq("Description of the Book");
        });
    });
});