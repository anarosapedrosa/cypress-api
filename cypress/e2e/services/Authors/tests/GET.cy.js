import * as GET from '../requests/GET.request.cy'

describe ('GET',() => {

    it('Lista todos os autores', () => {
        GET.getAuthors().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
    });

    it('Traz um autor por ID', () => {
        GET.getOneAuthor(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body).to.be.not.null;
            assert.isNumber(response.body.id)
            expect(response.body.firstName).to.eq('First Name 1');
            expect(response.body.lastName).to.eq('Last Name 1');
        }); 
    }) 
    
    it('Traz os autores de um determinado livro', () => {
        GET.getAuthorsofIdBook(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body[0].idBook).to.eq(1);
        }); 
    })  


});


