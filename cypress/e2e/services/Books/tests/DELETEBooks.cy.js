import * as DELETEBooks from '../requests/DELETEBooks.request.cy'
import * as GETBooks from '../requests/GETBooks.request.cy';
import * as POSTBooks from '../requests/POSTBooks.request.cy';

context('DELETE',() =>{
    it('Apaga um livro', () =>{
        GETBooks.getBooks().then((resAllBooks) => {
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
              expect(resDeleteBook.status).to.eq(200);
            });
        });
    });

    it('Cria e apaga um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
          DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => {
            expect(resDeleteBook.status).to.eq(200)
          })
        })
    });

});