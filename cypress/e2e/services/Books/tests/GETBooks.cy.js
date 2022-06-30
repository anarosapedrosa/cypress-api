import * as GETBooks from '../requests/GETBooks.request.cy'

describe('GET',() =>{
    it('Deve retornar uma lista de livros',() =>{
        GETBooks.getBooks().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null; // cannot be null
        })
    })

    it('Deve retornar um livro por ID', () => {
        GETBooks.getOneBook(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body).to.be.not.null;
            assert.isNumber(response.body.id)
        })
    }) 

    it('Deve retornar 404 ao buscar por id não cadastrado', function(){
        const id = '65655458'
        GETBooks.getOneBook(id).then(function(response){
            expect(response.status).to.eql(404)
        })
    })

    it('Deve retornar 400 ao buscar por id não válido', function(){
        const id = '656554581111111111111'
        GETBooks.getOneBook(id).then(function(response){
            expect(response.status).to.eql(400)
        })
    })
});