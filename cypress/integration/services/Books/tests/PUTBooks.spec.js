import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {
  it('Change a book', () => {
    GETBooks.allBooks().then((resAllBooks) => {
      PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Name of the Book Changed');
      })
    })
  });

  it('Create and Change a Book', () => {
    POSTBooks.addBook().then((resAddBook) => {
      PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
        expect(resChangeBook.status).to.eq(200);
        expect(resChangeBook.body).to.be.not.null;
        expect(resChangeBook.body.title).to.eq('Name of the Book Changed');
      })
    })
  });
});