import * as POSTBooks from '../requests/POSTBooks.request.cy'
let resAddBook = '';

context('POST',() =>{
    it('Adicionando um novo livro', () =>{
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200);
            resAddBook = response;
        });
    });

    it('Retorno não deve ser vazio', () => {
        expect(resAddBook.body).to.not.be.null;
    });

    it('O nome do livro deve ser Harry Potter e a Pedra Filosofal', () => {
        expect(resAddBook.body.title).to.eql("Harry Potter e a Pedra Filosofal");
    });
    
    it('A descrição do livro deve ser Harry Potter e suas aventuras', () => {
        expect(resAddBook.body.description).to.eql("Harry Potter e suas aventuras");
    });
});