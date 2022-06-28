import * as PUTBooks from '../requests/PUTBooks.request.cy'
import * as GETBooks from '../requests/GETBooks.request.cy'
import * as POSTBooks from '../requests/POSTBooks.request.cy'

describe('PUT', () => {
  it('Alterando o título de um livro', () => {
    GETBooks.getBooks().then((resAllBooks) => {
      PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Harry Potter');
      })
    })
  });


  it('Criando e alterando um livro', () => {
    POSTBooks.addBook().then((resAddBook) => {
      PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Harry Potter');
      })
    })
  });
});