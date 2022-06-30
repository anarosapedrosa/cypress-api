import * as GET from '../requests/GET.request.cy'

describe ('GET',() => {

    it('Deve retornar uma lista de autores', () => {
        GET.getAuthors().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });
    });

    it('Deve retornar um autor por ID', () => {
        GET.getOneAuthor(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body).to.be.not.null;
            assert.isNumber(response.body.id)
            expect(response.body.firstName).to.eq('First Name 1');
            expect(response.body.lastName).to.eq('Last Name 1');
        }); 
    }) 
    
    it('Deve retornar os autores de um determinado livro', () => {
        GET.getAuthorsofIdBook(1).should((response) =>{
            expect(response.status).to.eq(200) 
            expect(response.body[0].idBook).to.eq(1);
        }); 
    })  

    it('Deve retornar 404 ao buscar por id não cadastrado', function(){
        const id = '65655458'
        GET.getOneAuthor(id).then(function(response){
            expect(response.status).to.eql(404)
        })
    })

    it('Deve retornar 400 ao buscar por id não válido', function(){
        const id = '656554581111111111111'
        GET.getOneAuthor(id).then(function(response){
            expect(response.status).to.eql(400)
        })
    })


});


